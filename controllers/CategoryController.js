class CategoryController {
    constructor(categoryService, respond) {
        this.categoryService = categoryService;
        this.respond = respond;
    }

    async createCategory(req, res) {
        try {
            const data = req.body;
            const category = await this.categoryService.createCategory(data);
            this.respond(res, category, true, "Category created successfully", "", 201);
        } catch (error) {
            this.respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async getCategory(req, res) {
        try {
            const categoryId = req.params.id;
            const category = await this.categoryService.findById(categoryId);
            if (!category) {
                return this.respond(res, null, false, "Category not found", "NOT_FOUND", 404);
            }
            this.respond(res, category, true, "Category retrieved successfully", "", 200);
        } catch (error) {
            this.respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async updateCategory(req, res) {
        try {
            const categoryId = req.params.id;
            const data = req.body;
            const updatedCategory = await this.categoryService.updateCategory(categoryId, data);
            this.respond(res, updatedCategory, true, "Category updated successfully", "", 200);
        } catch (error) {
            this.respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async getAllCategories(req, res) {
        try {
            const categories = await this.categoryService.getAllCategories();
            this.respond(res, categories, true, "Categories retrieved successfully", "", 200);
        } catch (error) {
            this.respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async deleteCategory(req, res) {
        try {
            const categoryId = req.params.id;
            await this.categoryService.deleteCategory(categoryId);
            this.respond(res, null, true, "Category deleted successfully", "", 204);
        } catch (error) {
            this.respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }
}

module.exports = CategoryController;

