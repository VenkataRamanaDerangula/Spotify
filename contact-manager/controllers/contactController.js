const Contact = require('../models/Contact');
const responseFormatter = require('../utils/responseFormatter');
let contactCounter = 1;
exports.identifyContact = async (req, res) => {
  try {
    const { email, phoneNumber } = req.body;

    if (!email && !phoneNumber) {
      return res.status(400).json({ message: 'Email or phone number is required.' });
    }

    const existingContacts = await Contact.find({
      $or: [{ email }, { phoneNumber }],
    });

    let primaryContact;
    if (existingContacts.length > 0) {
      primaryContact = existingContacts.find(contact => contact.isPrimary) || existingContacts[0];
    } else {
      const newContact = await Contact.create({
        contactId: contactCounter++,
        email,
        phoneNumber,
        isPrimary: true,
      });
      return res.status(201).json(responseFormatter(newContact, []));
    }

    const secondaryContacts = existingContacts.filter(contact => !contact.isPrimary);
    if (!existingContacts.some(contact => contact.email === email || contact.phoneNumber === phoneNumber)) {
      const newSecondary = await Contact.create({
        contactId: contactCounter++,
        email,
        phoneNumber,
        isPrimary: false,
        primaryContactId: primaryContact.contactId,
      });
      secondaryContacts.push(newSecondary);
    }

    res.status(200).json(responseFormatter(primaryContact, secondaryContacts));
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.searchContacts = async (req, res) => {
  try {
    const { query, page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    const searchQuery = query ? { $or: [{ email: query }, { phoneNumber: query }] } : {};
    const primaryContacts = await Contact.find({
      ...searchQuery,
      isPrimary: true,
    })
      .skip(skip)
      .limit(parseInt(limit));

    res.status(200).json(primaryContacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
