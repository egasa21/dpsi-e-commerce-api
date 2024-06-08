class AuthController {
    constructor(authService, respond) {
        this.authService = authService;
        this.respond = respond;
    }

    async register(req, res) {
        try {
            const data = req.body;
            const user = await this.authService.register(data);
            this.respond(res, user, true, "User created successfully", "", 201);
        } catch (error) {
            this.respond(res, null, false, error.message, "BAD_REQUEST", 400);
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const token = await this.authService.login(email, password);
            this.respond(res, { token }, true, "Login successful", "", 200);
        } catch (error) {
            this.respond(res, null, false, error.message, "BAD_REQUEST", 400);
        }
    }
}

module.exports = AuthController;
