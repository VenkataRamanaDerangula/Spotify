module.exports = (primaryContact, secondaryContacts) => ({
    contact: {
      primaryContactId: primaryContact.contactId,
      emails: [primaryContact.email, ...secondaryContacts.map(sc => sc.email).filter(Boolean)],
      phoneNumbers: [primaryContact.phoneNumber, ...secondaryContacts.map(sc => sc.phoneNumber).filter(Boolean)],
      secondaryContactIds: secondaryContacts.map(sc => sc.contactId),
    },
  });
  