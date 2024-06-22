const express = require('express');
const CustomerController = require('../controllers/CustomerController');
const CustomerService = require('../services/CustomerService');
const { Respond } = require('../helpers/helpers');
const router = express.Router();
const { Customer } = require('../models/index');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const customerController = new CustomerController(
    new CustomerService(Customer),
    Respond
)

router.post('/customers/', customerController.createCustomer.bind(customerController));
router.get('/customers/:id',
    AuthMiddleware.verifyToken.bind(AuthMiddleware),
    AuthMiddleware.verifyUser.bind(AuthMiddleware),
    customerController.getCustomer.bind(customerController)
);
router.get('/customers/',
    AuthMiddleware.verifyToken.bind(AuthMiddleware),
    AuthMiddleware.verifyUser.bind(AuthMiddleware),
    customerController.getAllCustomers.bind(customerController)
);
router.put('/customers/:id',
    AuthMiddleware.verifyToken.bind(AuthMiddleware),
    AuthMiddleware.verifyUser.bind(AuthMiddleware),
    customerController.updateCustomer.bind(customerController)
);
router.delete('/customers/:id',
    AuthMiddleware.verifyToken.bind(AuthMiddleware),
    AuthMiddleware.verifyAdmin.bind(AuthMiddleware),
    customerController.deleteCustomer.bind(customerController)
)

module.exports = router;