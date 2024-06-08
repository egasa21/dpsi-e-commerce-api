const express = require('express');
const ShipperController = require('../controllers/ShipperController');
const ShipperService = require('../services/ShipperService');
const router = express.Router();
const { Shipper } = require('../models/index');

const shipperService = new ShipperService(Shipper);
const shipperController = new ShipperController(shipperService);

router.post('/shippers/', shipperController.createShipper.bind(shipperController));
router.get('/shippers/:id', shipperController.getShipper.bind(shipperController));
router.get('/shippers', shipperController.getAllShippers.bind(shipperController));
router.put('/shippers/:id', shipperController.updateShipper.bind(shipperController));
router.delete('/shippers/:id', shipperController.deleteShipper.bind(shipperController));

module.exports = router;
