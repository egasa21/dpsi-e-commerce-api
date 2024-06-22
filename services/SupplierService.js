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

    async findAllSuppliers() {
        try {
            const suppliers = await this.supplierModel.findAll();
            return suppliers;
        } catch (error) {
            throw error;
        }
    }

    async findSupplierById(id) {
        try {
            const supplier = await this.supplierModel.findByPk(id);
            return supplier;
        } catch (error) {
            throw error;
        }
    }

    async updateSupplier(id, data) {
        try {
            const supplier = await this.supplierModel.findByPk(id);
            if (!supplier) {
                throw new Error('Supplier not found');
            }
            await supplier.update(data);
            return supplier;
        } catch (error) {
            throw error;
        }
    }

    async deleteSupplier(id) {
        try {
            const supplier = await this.supplierModel.findByPk(id);
            if (!supplier) {
                throw new Error('Supplier not found');
            }
            await supplier.destroy();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = SupplierService;
