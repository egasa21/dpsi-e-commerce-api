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

  async getAllSuppliers(req, res) {
    try {
      const suppliers = await this.supplierService.findAllSuppliers();
      Respond(res, suppliers, true, "Suppliers retrieved successfully", "", 200);
    } catch (error) {
      Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
    }
  }

  async getSupplierById(req, res) {
    try {
      const supplierId = req.params.id;
      const supplier = await this.supplierService.findSupplierById(supplierId);
      if (!supplier) {
        Respond(res, null, false, "Supplier not found", "NOT_FOUND", 404);
      } else {
        Respond(res, supplier, true, "Supplier retrieved successfully", "", 200);
      }
    } catch (error) {
      Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
    }
  }

  async updateSupplier(req, res) {
    try {
      const supplierId = req.params.id;
      const data = req.body;
      const updatedSupplier = await this.supplierService.updateSupplier(supplierId, data);
      Respond(res, updatedSupplier, true, "Supplier updated successfully", "", 200);
    } catch (error) {
      Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
    }
  }

  async deleteSupplier(req, res) {
    try {
      const supplierId = req.params.id;
      await this.supplierService.deleteSupplier(supplierId);
      Respond(res, null, true, "Supplier deleted successfully", "", 204);
    } catch (error) {
      Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
    }
  }
}

module.exports = SupplierController;
