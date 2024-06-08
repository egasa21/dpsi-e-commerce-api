const { Customer } = require('../models/index')

class CustomerService {
    async createCustomer(data) {
        try {
            const customer = await Customer.create(data);
            return customer
        } catch (error) {
            throw error;
        }
    }

    async findById(id) {
        try {
            const customer = await Customer.findByPk(id)
            return customer
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new CustomerService();