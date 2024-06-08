const express = require('express');
const SupplierController = require('../controllers/SupplierController');
const SupplierService = require('../services/SupplierService');
const router = express.Router();
const { Supplier } = require('../models/index');

const supplierService = new SupplierService(Supplier);
const supplierController = new SupplierController(supplierService);

router.post('/suppliers/', supplierController.createSupplier.bind(supplierController));

module.exports = router;
