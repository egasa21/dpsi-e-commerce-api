const {Respond} = require("../helpers/helpers");

class OrderDetailController {
    constructor(orderDetailService) {
        this.orderDetailService = orderDetailService;
    }

    async createOrderDetail(req, res) {
        try {
            const data = req.body;
            const orderDetail = await this.orderDetailService.createOrderDetail(data);
            Respond(res, orderDetail, true, "Order detail created successfully", "", 201);
        } catch (error) {
            if (error.message === 'Order not found' || error.message === 'Product not found') {
                Respond(res, null, false, error.message, "BAD_REQUEST", 400);
            } else {
                Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
            }
        }
    }

    async getOrderDetail(req, res) {
        try {
            const orderDetailId = req.params.id;
            const orderDetail = await this.orderDetailService.findById(orderDetailId);
            if (!orderDetail) {
                return Respond(res, null, false, "Order detail not found", "NOT_FOUND", 404);
            }
            Respond(res, orderDetail, true, "Order detail retrieved successfully", "", 200);
        } catch (error) {
            Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async getAllOrderDetails(req, res) {
        try {
            const orderDetails = await this.orderDetailService.findAllOrderDetails();
            Respond(res, orderDetails, true, "Order details retrieved successfully", "", 200);
        } catch (error) {
            Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async updateOrderDetail(req, res) {
        try {
            const orderDetailId = req.params.id;
            const data = req.body;
            const updatedOrderDetail = await this.orderDetailService.updateOrderDetail(orderDetailId, data);
            Respond(res, updatedOrderDetail, true, "Order detail updated successfully", "", 200);
        } catch (error) {
            Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async deleteOrderDetail(req, res) {
        try {
            const orderDetailId = req.params.id;
            await this.orderDetailService.deleteOrderDetail(orderDetailId);
            Respond(res, null, true, "Order detail deleted successfully", "", 204);
        } catch (error) {
            Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }
}

module.exports = OrderDetailController;
