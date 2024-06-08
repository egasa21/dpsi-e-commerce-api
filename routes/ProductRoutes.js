const express = require('express');
const ProductController = require('../controllers/ProductController');
const ProductService = require('../services/ProductService');
const {Respond} = require('../helpers/helpers');
const router = express.Router();
const SupplierService = require('../services/SupplierService');
const CategoryService = require('../services/CategoryService');
const {Product, Supplier, Category} = require('../models/index');
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const supplierService = new SupplierService(Supplier);
const categoryService = new CategoryService(Category);
const productService = new ProductService(supplierService, categoryService, Product);
const productController = new ProductController(productService);

router.post('/products/',
    AuthMiddleware.verifyToken.bind(AuthMiddleware),
    AuthMiddleware.verifyAdmin.bind(AuthMiddleware),
    productController.createProduct.bind(productController));

module.exports = router;
