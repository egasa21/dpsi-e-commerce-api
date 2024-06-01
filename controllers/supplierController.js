const supplierService = require('../services/supplierService');
const { Respond } = require('../helpers/helpers');

class SupplierController {
    async createSupplier(req, res) {
      try {
        const data = req.body;
        const supplier = await supplierService.createSupplier(data);
        Respond(res, supplier, true, "Supplier created successfully", "", 201);
      } catch (error) {
        Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
      }
    }
  
    
  }
  
  module.exports = new SupplierController();