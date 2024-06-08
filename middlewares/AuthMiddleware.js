const jwt = require('jsonwebtoken');
const { User } = require('../models/index')
require('dotenv').config()

class AuthMiddleware {
    constructor() {
        this.secret = process.env.JWT_SECRET
    }

    async verifyToken(req, res, next) {
        const token = req.headers['authorization'];
        if (!token) {
            return res.status(403).send({ message: 'No token provided!' });
        }

        try {
            const decoded = jwt.verify(token, this.secret);
            req.userId = decoded.id;
        } catch (err) {
            return res.status(401).send({ message: 'Unauthorized!' });
        }
    }

    async verifyUser(req, res, next) {
        try {
            const user = await User.findByPk(req.userId);
            if (!user) {
                return res.status(404).send({ message: 'User not found!' });
            }
            req.user = user;
            next();
        } catch (error) {
            return res.status(500).send({ message: 'Unable to authenticate user!' });
        }
    }

    async verifyAdmin(req, res, next) {
        try {
            const user = await User.findByPk(req.userId);
            if (!user) {
                return res.status(404).send({ message: 'User not found!' });
            }

            if (!user.isAdmin) {
                return res.status(403).send({ message: 'Require Admin Role!' });
            }
            next();
        } catch (error) {
            return res.status(500).send({ message: 'Unable to authenticate user!' });
        }
    }
}


module.exports = new AuthMiddleware()