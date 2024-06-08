const categoryService = require('../services/CategoryService');
const { Respond } = require('../helpers/helpers')

class CategoryController {
    async createCategory(req, res) {
      try {
        const data = req.body;
        const category = await categoryService.createCategory(data);
        Respond(res, category, true, "Category created successfully", "", 201);
      } catch (error) {
        Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
      }
    }
  
    
  }
  
  module.exports = new CategoryController();
  