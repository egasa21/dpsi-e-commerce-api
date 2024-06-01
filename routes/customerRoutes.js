const express = require('express');
const customerController = require('../controllers/customerController');
const router = express.Router();

router.post('/customers/', customerController.createCustomer);

module.exports = router;