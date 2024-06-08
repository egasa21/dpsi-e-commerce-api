const customerService = require('../services/CustomerService');
const { Respond } = require('../helpers/helpers')

class CustomerController {
    async createCustomer(req, res) {
        try {
            const data = req.body;
            const customer = await customerService.createCustomer(data);
            Respond(res, customer, true, 'Customer creted successfully', '', 201)
        } catch (error) {
            Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }
}

module.exports = new CustomerController();