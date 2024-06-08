class CategoryService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }

    async createCategory(data) {
        try {
            const category = await this.categoryModel.create(data);
            return category;
        } catch (error) {
            throw error;
        }
    }

    async findById(id) {
        try {
            const category = await this.categoryModel.findByPk(id);
            return category;
        } catch (error) {
            throw error;
        }
    }

    async updateCategory(id, data) {
        try {
            const category = await this.categoryModel.findByPk(id);
            if (!category) {
                throw new Error('Category not found');
            }
            await category.update(data);
            return category;
        } catch (error) {
            throw error;
        }
    }

    async getAllCategories() {
        try {
            const categories = await this.categoryModel.findAll();
            return categories;
        } catch (error) {
            throw error;
        }
    }

    async deleteCategory(id) {
        try {
            const category = await this.categoryModel.findByPk(id);
            if (!category) {
                throw new Error('Category not found');
            }
            await category.destroy();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CategoryService;
