const { Respond } = require('../helpers/helpers');

class ShipperController {
    constructor(shipperService) {
        this.shipperService = shipperService;
    }

    async createShipper(req, res) {
        try {
            const data = req.body;
            const shipper = await this.shipperService.createShipper(data);
            Respond(res, shipper, true, "Shipper created successfully", "", 201);
        } catch (error) {
            Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async getShipper(req, res) {
        try {
            const shipperId = req.params.id;
            const shipper = await this.shipperService.findById(shipperId);
            if (!shipper) {
                return Respond(res, null, false, "Shipper not found", "NOT_FOUND", 404);
            }
            Respond(res, shipper, true, "Shipper retrieved successfully", "", 200);
        } catch (error) {
            Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async getAllShippers(req, res) {
        try {
            const shippers = await this.shipperService.findAllShippers();
            Respond(res, shippers, true, "Shippers retrieved successfully", "", 200);
        } catch (error) {
            Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async updateShipper(req, res) {
        try {
            const shipperId = req.params.id;
            const data = req.body;
            const updatedShipper = await this.shipperService.updateShipper(shipperId, data);
            Respond(res, updatedShipper, true, "Shipper updated successfully", "", 200);
        } catch (error) {
            Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async deleteShipper(req, res) {
        try {
            const shipperId = req.params.id;
            await this.shipperService.deleteShipper(shipperId);
            Respond(res, null, true, "Shipper deleted successfully", "", 204);
        } catch (error) {
            Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }
}

module.exports = ShipperController;
