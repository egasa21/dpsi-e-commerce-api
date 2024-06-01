const authService = require('../services/authService');
const { Respond } = require('../helpers/helpers');

class AuthController {
    async register(req, res) {
        try {
            const data = req.body;
            const user = await authService.register(data)

            Respond(res, user, true, "User created successfully", "", 201);
        } catch (error) {
            Respond(res, null, false, error.message, "BAD_REQUEST", 400);
        }
    }
}

module.exports = new AuthController();