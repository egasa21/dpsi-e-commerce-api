class OrderService {
    constructor(orderModel, customerModel, employeeModel, shipperModel) {
        this.orderModel = orderModel;
        this.customerModel = customerModel;
        this.employeeModel = employeeModel;
        this.shipperModel = shipperModel;
    }

    async findAllOrders() {
        try {
            const orders = await this.orderModel.findAll({
                include: [
                    { model: this.customerModel },
                    { model: this.employeeModel },
                    { model: this.shipperModel }
                ]
            });
            return orders;
        } catch (error) {
            throw error;
        }
    }

    async updateOrder(id, data) {
        try {
            const order = await this.orderModel.findByPk(id);
            if (!order) {
                throw new Error('Order not found');
            }
            await order.update(data);
            return order;
        } catch (error) {
            throw error;
        }
    }

    async deleteOrder(id) {
        try {
            const order = await this.orderModel.findByPk(id);
            if (!order) {
                throw new Error('Order not found');
            }
            await order.destroy();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = OrderService;
