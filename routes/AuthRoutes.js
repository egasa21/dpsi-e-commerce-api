const express = require('express');
const AuthController = require('../controllers/AuthController');
const { Respond } = require('../helpers/helpers');
const { User, Customer } = require('../models/index');
const jwt = require("jsonwebtoken");
const AuthService = require("../services/AuthService");
const CustomerService = require('../services/CustomerService');
require('dotenv').config();

const customerService = new CustomerService(Customer)
const authController = new AuthController(
    new AuthService(User, customerService, jwt, process.env.JWT_SECRET),
    Respond
);

const router = express.Router();

router.post('/register', authController.register.bind(authController));
router.post('/login', authController.login.bind(authController));

module.exports = router;
