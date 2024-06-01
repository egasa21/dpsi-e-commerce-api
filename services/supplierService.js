const { Supplier } = require('../models/index');

class SupplierService {
    async createSupplier(data) {
        try {
            const supplier = await Supplier.create(data);
            return supplier;
        } catch (error) {
            throw error;
        }
    }

    async findById(id) {
        try {
            const supplier = await Supplier.findByPk(id);
            return supplier;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new SupplierService();
