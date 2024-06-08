const {Respond} = require("../helpers/helpers");

class EmployeeController {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }

    async getEmployee(req, res) {
        try {
            const employeeId = req.params.id;
            const employee = await this.employeeService.findById(employeeId);
            if (!employee) {
                return Respond(res, null, false, "Employee not found", "NOT_FOUND", 404);
            }
            Respond(res, employee, true, "Employee retrieved successfully", "", 200);
        } catch (error) {
            Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async getAllEmployees(req, res) {
        try {
            const employees = await this.employeeService.findAllEmployees();
            Respond(res, employees, true, "Employees retrieved successfully", "", 200);
        } catch (error) {
            Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async updateEmployee(req, res) {
        try {
            const employeeId = req.params.id;
            const data = req.body;
            const updatedEmployee = await this.employeeService.updateEmployee(employeeId, data);
            Respond(res, updatedEmployee, true, "Employee updated successfully", "", 200);
        } catch (error) {
            Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }

    async deleteEmployee(req, res) {
        try {
            const employeeId = req.params.id;
            await this.employeeService.deleteEmployee(employeeId);
            Respond(res, null, true, "Employee deleted successfully", "", 204);
        } catch (error) {
            Respond(res, null, false, error.message, "INTERNAL_SERVER_ERROR", 500);
        }
    }
}

module.exports = EmployeeController;
