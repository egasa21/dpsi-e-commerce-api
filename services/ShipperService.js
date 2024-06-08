class ShipperService {
    constructor(shipperModel) {
        this.shipperModel = shipperModel;
    }

    async createShipper(data) {
        try {
            const shipper = await this.shipperModel.create(data);
            return shipper;
        } catch (error) {
            throw error;
        }
    }

    async findById(id) {
        try {
            const shipper = await this.shipperModel.findByPk(id);
            return shipper;
        } catch (error) {
            throw error;
        }
    }

    async findAllShippers() {
        try {
            const shippers = await this.shipperModel.findAll();
            return shippers;
        } catch (error) {
            throw error;
        }
    }

    async updateShipper(id, data) {
        try {
            const shipper = await this.shipperModel.findByPk(id);
            if (!shipper) {
                throw new Error('Shipper not found');
            }
            await shipper.update(data);
            return shipper;
        } catch (error) {
            throw error;
        }
    }

    async deleteShipper(id) {
        try {
            const shipper = await this.shipperModel.findByPk(id);
            if (!shipper) {
                throw new Error('Shipper not found');
            }
            await shipper.destroy();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ShipperService;
