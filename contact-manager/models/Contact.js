const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  contactId: { type: Number, unique: true, required: true },
  email: { type: String, unique: true, sparse: true },
  phoneNumber: { type: String, unique: true, sparse: true },
  isPrimary: { type: Boolean, default: true },
  primaryContactId: { type: Number, default: null },
});

module.exports = mongoose.model('Contact', ContactSchema);
