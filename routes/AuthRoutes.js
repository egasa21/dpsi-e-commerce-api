const express = require('express');
const AuthController = require('../controllers/AuthController');
const { Respond } = require('../helpers/helpers');
const User = require('../models/index').User;
const customerService = require('../services/CustomerService');
const jwt = require("jsonwebtoken");
const AuthService = require("../services/AuthService");
require('dotenv').config();

const authController = new AuthController(
    new AuthService(User, customerService, jwt, process.env.JWT_SECRET),
    Respond
);

const router = express.Router();

router.post('/register', authController.register.bind(authController));
router.post('/login', authController.login.bind(authController));

module.exports = router;
