const express = require('express');
const SupplierController = require('../controllers/SupplierController');
const SupplierService = require('../services/SupplierService');
const router = express.Router();
const { Supplier } = require('../models/index');

const supplierService = new SupplierService(Supplier);
const supplierController = new SupplierController(supplierService);

router.post('/suppliers', supplierController.createSupplier.bind(supplierController));
router.get('/suppliers', supplierController.getAllSuppliers.bind(supplierController));
router.get('/suppliers/:id', supplierController.getSupplierById.bind(supplierController));
router.put('/suppliers/:id', supplierController.updateSupplier.bind(supplierController));
router.delete('/suppliers/:id', supplierController.deleteSupplier.bind(supplierController));

module.exports = router;
