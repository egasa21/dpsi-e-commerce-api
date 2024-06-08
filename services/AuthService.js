const {User} = require('../models/index');
const customerService = require('./CustomerService')
require('dotenv').config();
const NotFoundError = require('../exceptions/NotFoundError');
const AuthenticationError = require("../exceptions/AuthenticationError");
const jwt = require("jsonwebtoken");

class AuthService {
    constructor() {
        this.secret = process.env.JWT_SECRET;
    }

    async register(data) {
        try {

            this.validateRegisterData(data);

            const customerExists = await customerService.findById(data.customerID);
            if (!customerExists) {
                throw new NotFoundError('Customer not found')
            }

            return await User.create(data);

        } catch (error) {
            throw error;
        }
    }

    async login(email, password) {
        try {
            const user = await User.findOne({where: {email}});
            if (!user) {
                throw new NotFoundError('User not found');
            }

            const isPasswordValid = await user.comparePassword(password);
            if (!isPasswordValid) {
                throw new AuthenticationError();
            }

            const token = jwt.sign({id: user.id, isAdmin: user.isAdmin}, this.secret, {
                expiresIn: '1h'
            })

            return token;
        } catch (e) {
            throw e;
        }
    }

    validateRegisterData(data) {
        if (!data.email || !data.password || !data.customerID) {

        }
    }
}

module.exports = new AuthService();