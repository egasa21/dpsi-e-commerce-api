const express = require('express');
const supplierController = require('../controllers/supplierController');
const router = express.Router();

router.post('/suppliers/', supplierController.createSupplier);

module.exports = router;