const { Respond } = require('../helpers/helpers');

class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }

    async getAllOrders(req, res) {
        try {
            const orders = await this.orderService.findAllOrders();
            Respond(res, orders, true, "Orders retrieved successfully", "", 200);
        } catch (error) {
            Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async getOrderById(req, res) {
        try {
            const orderId = req.params.id;
            const order = await this.orderService.findOrderById(orderId);
            if (!order) {
                Respond(res, null, false, "Order not found", "NOT_FOUND", 404);
            } else {
                Respond(res, order, true, "Order retrieved successfully", "", 200);
            }
        } catch (error) {
            Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async createOrder(req, res) {
        try {
            const data = req.body;
            const newOrder = await this.orderService.createOrder(data);
            Respond(res, newOrder, true, "Order created successfully", "", 201);
        } catch (error) {
            Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async updateOrder(req, res) {
        try {
            const orderId = req.params.id;
            const data = req.body;
            const updatedOrder = await this.orderService.updateOrder(orderId, data);
            Respond(res, updatedOrder, true, "Order updated successfully", "", 200);
        } catch (error) {
            Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async deleteOrder(req, res) {
        try {
            const orderId = req.params.id;
            await this.orderService.deleteOrder(orderId);
            Respond(res, null, true, "Order deleted successfully", "", 204);
        } catch (error) {
            Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }
}

module.exports = OrderController;
