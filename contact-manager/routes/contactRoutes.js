const express = require('express');
const { identifyContact, searchContacts } = require('../controllers/contactController');
const { authenticateAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/identify', identifyContact);
router.get('/search', authenticateAdmin, searchContacts);

module.exports = router;
