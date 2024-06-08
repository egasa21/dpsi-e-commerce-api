const NotFoundError = require("../exceptions/NotFoundError");
const AuthenticationError = require("../exceptions/AuthenticationError");
const InvariantError = require("../exceptions/InvariantError");

class AuthService {
    constructor(userModel, customerService, jwt, secret) {
        this.User = userModel;
        this.customerService = customerService;
        this.jwt = jwt;
        this.secret = secret;
    }

    async register(data) {
        try {
            this.validateRegisterData(data);

            const customerExists = await this.customerService.findById(data.customerID);
            if (!customerExists) {
                throw new NotFoundError('Customer not found');
            }

            return await this.User.create(data);
        } catch (error) {
            throw error;
        }
    }

    async login(email, password) {
        try {
            const user = await this.User.findOne({ where: { email } });
            if (!user) {
                throw new NotFoundError('User not found');
            }

            const isPasswordValid = await user.comparePassword(password);
            if (!isPasswordValid) {
                throw new AuthenticationError();
            }

            const token = this.jwt.sign({ id: user.id, isAdmin: user.isAdmin }, this.secret, {
                expiresIn: '1h'
            });

            return token;
        } catch (e) {
            throw e;
        }
    }

    validateRegisterData(data) {
        if (!data.email || !data.password || !data.customerID) {
            throw new InvariantError('missing required fields');
        }
    }
}

module.exports = AuthService;
