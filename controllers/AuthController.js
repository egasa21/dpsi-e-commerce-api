const authService = require('../services/AuthService');
const { Respond } = require('../helpers/helpers');

class AuthController {
    constructor() {
        this.authService = authService
    }

    async register(req, res) {
        try {
            const data = req.body;
            const user = await this.authService.register(data)

            Respond(res, user, true, "User created successfully", "", 201);
        } catch (error) {
            Respond(res, null, false, error.message, "BAD_REQUEST", 400);
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const token = await this.authService.login(email, password);

            Respond(res, { token }, true, "Login successful", "", 200);
        } catch (error) {
            Respond(res, null, false, error.message, "BAD_REQUEST", 400);
        }
    }
}

module.exports = new AuthController();