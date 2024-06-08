class ProductService {
    constructor(supplierService, categoryService, productModel) {
        this.supplierService = supplierService;
        this.categoryService = categoryService;
        this.productModel = productModel;
    }

    async createProduct(data) {
        try {
            // Validate supplierID
            const supplierExists = await this.supplierService.findById(data.supplierID);
            if (!supplierExists) {
                throw new Error('Supplier not found');
            }

            // Validate categoryID
            const categoryExists = await this.categoryService.findById(data.categoryID);
            if (!categoryExists) {
                throw new Error('Category not found');
            }

            // Create product
            const product = await this.productModel.create(data);
            return product;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductService;
