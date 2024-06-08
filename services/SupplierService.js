class SupplierService {
    constructor(supplierModel) {
        this.supplierModel = supplierModel;
    }

    async createSupplier(data) {
        try {
            const supplier = await this.supplierModel.create(data);
            return supplier;
        } catch (error) {
            throw error;
        }
    }

    async findById(id) {
        try {
            const supplier = await this.supplierModel.findByPk(id);
            return supplier;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = SupplierService;
