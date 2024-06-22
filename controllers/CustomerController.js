class CustomerController {
    constructor(customerService, respond) {
        this.customerService = customerService,
            this.respond = respond
    }

    async createCustomer(req, res) {
        try {
            const data = req.body;
            const customer = await this.customerService.createCustomer(data);
            this.respond(res, customer, true, 'Customer creted successfully', '', 201)
        } catch (error) {
            this.respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async getCustomer(req, res) {
        try {
            const customerId = req.params.id;
            const customer = await this.customerService.findById(customerId);
            if (!customer) {
                this.respond(res, null, false, "Customer not found", "NOT_FOUND", 404);
            }
            this.respond(res, customer, true, "Customer retrieved successfully", "", 200);
        } catch (error) {
            this.respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async updateCustomer(req, res) {
        try {
            const customerId = req.params.id;
            const data = req.body;
            const updateCustomer = await this.customerService.updateCustomer(customerId, data);
            this.respond(res, updateCustomer, true, "Customer updated successfully", "", 200);
        } catch (error) {
            this.respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async getAllCustomers(req, res) {
        try {
            const customers = await this.customerService.getAllCustomers();
            this.respond(res, customers, true, "Customers retrieved successfully", "", 200);
        } catch (error) {
            throw error
        }
    }

    async deleteCustomer(req, res) {
        try {
            const customerId = req.params.id;
            await this.customerService.deleteCustomer(customerId);
            this.respond(res, null, true, "Customer deleted successfully", "", 204);
        } catch (error) {
            throw error
        }
    }
}

module.exports = CustomerController;