const { Product } = require('../models/index')
const supplierService = require('./supplierService');
const categoryService = require('./categoryService');

class ProductService {
    async createProduct(data) {
        try {
            // Validate supplierID
            const supplierExists = await supplierService.findById(data.supplierID);
            if (!supplierExists) {
                throw new Error('Supplier not found');
            }

            // Validate categoryID
            const categoryExists = await categoryService.findById(data.categoryID);
            if (!categoryExists) {
                throw new Error('Category not found');
            }

            // Create product
            const product = await Product.create(data);
            return product;
        } catch (error) {
            throw error;
        }
    }

    
}

module.exports = new ProductService();