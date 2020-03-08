const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async(req, res, next) => {
    const employees = await Employee.find();
    res.json(employees);
};


module.exports = employeeCtrl;