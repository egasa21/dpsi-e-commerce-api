const express = require('express');
const customerController = require('../controllers/CustomerController');
const router = express.Router();

router.post('/customers/', customerController.createCustomer);

module.exports = router;