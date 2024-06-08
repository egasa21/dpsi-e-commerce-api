class OrderDetailService {
    constructor(orderDetailModel, orderModel, productModel) {
        this.orderDetailModel = orderDetailModel;
        this.orderModel = orderModel;
        this.productModel = productModel;
    }

    async createOrderDetail(data) {
        try {
            const order = await this.orderModel.findByPk(data.orderID);
            if (!order) {
                throw new Error('Order not found');
            }

            const product = await this.productModel.findByPk(data.productID);
            if (!product) {
                throw new Error('Product not found');
            }

            const orderDetail = await this.orderDetailModel.create(data);
            return orderDetail;
        } catch (error) {
            throw error;
        }
    }

    async findById(id) {
        try {
            const orderDetail = await this.orderDetailModel.findByPk(id);
            return orderDetail;
        } catch (error) {
            throw error;
        }
    }

    async findAllOrderDetails() {
        try {
            const orderDetails = await this.orderDetailModel.findAll();
            return orderDetails;
        } catch (error) {
            throw error;
        }
    }

    async updateOrderDetail(id, data) {
        try {
            const orderDetail = await this.orderDetailModel.findByPk(id);
            if (!orderDetail) {
                throw new Error('Order detail not found');
            }
            await orderDetail.update(data);
            return orderDetail;
        } catch (error) {
            throw error;
        }
    }

    async deleteOrderDetail(id) {
        try {
            const orderDetail = await this.orderDetailModel.findByPk(id);
            if (!orderDetail) {
                throw new Error('Order detail not found');
            }
            await orderDetail.destroy();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = OrderDetailService;
