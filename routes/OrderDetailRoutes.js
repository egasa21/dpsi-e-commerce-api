const express = require('express');
const OrderDetailController = require('../controllers/OrderDetailController');
const OrderDetailService = require('../services/OrderDetailService');
const {OrderDetail} = require('../models/index');
const router = express.Router();

const orderDetailService = new OrderDetailService(OrderDetail);
const orderDetailController = new OrderDetailController(orderDetailService);

router.post('/order-details/', orderDetailController.createOrderDetail.bind(orderDetailController));
router.get('/order-details/:id', orderDetailController.getOrderDetail.bind(orderDetailController));
router.get('/order-details', orderDetailController.getAllOrderDetails.bind(orderDetailController));
router.put('/order-details/:id', orderDetailController.updateOrderDetail.bind(orderDetailController));
router.delete('/order-details/:id', orderDetailController.deleteOrderDetail.bind(orderDetailController));

module.exports = router;
