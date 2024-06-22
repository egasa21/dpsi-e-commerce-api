class CustomerService {
    constructor(customerModel) {
        this.customerModel = customerModel;
    }

    async createCustomer(data) {
        try {
            const customer = await this.customerModel.create(data);
            return customer
        } catch (error) {
            throw error;
        }
    }

    async findById(id) {
        try {
            const customer = await this.customerModel.findByPk(id)
            return customer
        } catch (error) {
            throw error;
        }
    }

    async updateCustomer(id, data) {
        try {
            const customer = await this.customerModel.findByPk(id);
            if (!customer) {
                throw new Error('Customer not found')
            }
            await customer.update(data);
            return customer;
        } catch (error) {
            throw error;
        }
    }

    async getAllCustomers() {
        try {
            const customers = await this.customerModel.findAll();
            return customers;
        } catch (error) {
            throw error
        }
    }

    async deleteCustomer(id) {
        try {
            const customer = await this.customerModel.findByPk(id);
            await customer.destroy()
            return;
        } catch (error) {
            throw error
        }

    }
}

module.exports = CustomerService;