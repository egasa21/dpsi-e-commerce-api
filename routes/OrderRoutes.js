const express = require('express');
const OrderController = require('../controllers/OrderController');
const OrderService = require('../services/OrderService');
const {Customer, Employee, Shipper, Order} = require('../models/index');
const router = express.Router();

const orderService = new OrderService(Order, Customer, Employee, Shipper);
const orderController = new OrderController(orderService);

router.get('/orders', orderController.getAllOrders.bind(orderController));
router.get('/orders/:id', orderController.getOrderById.bind(orderController)); // New route for fetching a single order
router.post('/orders', orderController.createOrder.bind(orderController)); // New route for creating an order
router.put('/orders/:id', orderController.updateOrder.bind(orderController));
router.delete('/orders/:id', orderController.deleteOrder.bind(orderController));

module.exports = router;
