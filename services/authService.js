const { User} = require('../models/index');
const customerService = require('./customerService')

class AuthService {
    async register(data) {
        try {
            const customerExists = await customerService.findById(data.customerID);
            if(!customerExists){
                throw new Error('Customer not found')
            }

            const user = await User.create(data)
            return user;

        } catch (error) {
            throw error;
        }
    }
}

module.exports = new AuthService();