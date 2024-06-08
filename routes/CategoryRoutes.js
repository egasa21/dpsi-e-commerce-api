const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const CategoryService = require('../services/CategoryService');
const { Respond } = require('../helpers/helpers');
const router = express.Router();
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const { Category } = require('../models/index');

const categoryController = new CategoryController(
    new CategoryService(Category),
    Respond
);

router.post(
    '/categories/',
    AuthMiddleware.verifyToken.bind(AuthMiddleware),
    AuthMiddleware.verifyAdmin.bind(AuthMiddleware),
    categoryController.createCategory.bind(categoryController)
);

router.get(
    '/categories/:id',
    categoryController.getCategory.bind(categoryController)
);

router.put(
    '/categories/:id',
    AuthMiddleware.verifyToken.bind(AuthMiddleware),
    AuthMiddleware.verifyAdmin.bind(AuthMiddleware),
    categoryController.updateCategory.bind(categoryController)
);

router.get(
    '/categories',
    categoryController.getAllCategories.bind(categoryController)
);

router.delete(
    '/categories/:id',
    AuthMiddleware.verifyToken.bind(AuthMiddleware),
    AuthMiddleware.verifyAdmin.bind(AuthMiddleware),
    categoryController.deleteCategory.bind(categoryController)
);

module.exports = router;
