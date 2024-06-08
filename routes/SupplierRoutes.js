const express = require('express');
const supplierController = require('../controllers/SupplierController');
const router = express.Router();

router.post('/suppliers/', supplierController.createSupplier);

module.exports = router;