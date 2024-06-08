const { User } = require('../models/index');

class UserService {
    async findById(id) {
        try {
            const user = await User.findByPk(id)
            return user
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UserService();