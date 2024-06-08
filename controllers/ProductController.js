const productService = require('../services/ProductService')
const { Respond } = require('../helpers/helpers');

class ProductController {
    async createProduct(req, res) {
        try {
            const data = req.body;
            const product = await productService.createProduct(data);
            Respond(res, product, true, "Product created successfully", "", 201);
        } catch (error) {
            if (error.message === 'Supplier not found' || error.message === 'Category not found') {
                Respond(res, null, false, error.message, "BAD_REQUEST", 400);
            } else {
                Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
            }
        }
    }


}

module.exports = new ProductController();