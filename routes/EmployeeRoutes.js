const express = require('express');
const EmployeeController = require('../controllers/EmployeeController');
const EmployeeService = require('../services/EmployeeService');
const { Respond } = require('../helpers/helpers');
const router = express.Router();
const { Employee } = require('../models/index');

const employeeService = new EmployeeService(Employee);
const employeeController = new EmployeeController(employeeService);

router.get('/employees/:id', employeeController.getEmployee.bind(employeeController));
router.get('/employees', employeeController.getAllEmployees.bind(employeeController));
router.put('/employees/:id', employeeController.updateEmployee.bind(employeeController));
router.delete('/employees/:id', employeeController.deleteEmployee.bind(employeeController));

module.exports = router;
