const { Respond } = require('../helpers/helpers');

class SupplierController {
  constructor(supplierService) {
    this.supplierService = supplierService;
  }

  async createSupplier(req, res) {
    try {
      const data = req.body;
      const supplier = await this.supplierService.createSupplier(data);
      Respond(res, supplier, true, "Supplier created successfully", "", 201);
    } catch (error) {
      Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
    }
  }
}

module.exports = SupplierController;
