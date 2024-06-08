class EmployeeService {
    constructor(employeeModel) {
        this.employeeModel = employeeModel;
    }

    async createEmployee(data) {
        try {
            const employee = await this.employeeModel.create(data);
            return employee;
        } catch (error) {
            throw error;
        }
    }

    async findById(id) {
        try {
            const employee = await this.employeeModel.findByPk(id);
            return employee;
        } catch (error) {
            throw error;
        }
    }

    async findAllEmployees() {
        try {
            const employees = await this.employeeModel.findAll();
            return employees;
        } catch (error) {
            throw error;
        }
    }

    async updateEmployee(id, data) {
        try {
            const employee = await this.employeeModel.findByPk(id);
            if (!employee) {
                throw new Error('Employee not found');
            }
            await employee.update(data);
            return employee;
        } catch (error) {
            throw error;
        }
    }

    async deleteEmployee(id) {
        try {
            const employee = await this.employeeModel.findByPk(id);
            if (!employee) {
                throw new Error('Employee not found');
            }
            await employee.destroy();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = EmployeeService;
