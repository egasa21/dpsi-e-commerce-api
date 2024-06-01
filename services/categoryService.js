const { Category } = require('../models/index');

class CategoryService {
    async createCategory(data) {
        try {
            const category = await Category.create(data);
            return category;
        } catch (error) {
            throw error;
        }
    }

    async findById(id) {
        try {
            const category = await Category.findByPk(id);
            return category;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new CategoryService();
