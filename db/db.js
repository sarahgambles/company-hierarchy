const connection = require('./connection');

class DB {
    constructor (connection) {
        this.connection = connection
    }
    viewDepartments() {
        return this.connection.promise().query(
            "SELECT * FROM department;"
        )
    }
    viewRoles() {
        return this.connection.promise().query(
            "SELECT * FROM role;"
        )
    }
    viewEmployees() {
        return this.connection.promise().query(
            "SELECT * FROM employee;"
        )
    }
    createDepartment(department) {
        return this.connection.promise().query(
            "INSERT INTO department SET ?;", department
        )
    }
    createRole(role) {
        return this.connection.promise().query(
            "INSERT INTO role SET ?;", role
        )
    }
    createEmployee(employee) {
        return this.connection.promise().query(
            "INSERT INTO employee SET ?;", employee
        )
    }
    updateEmployeeRole(roleId, employeeId) {
        return this.connection.promise().query(
            "UPDATE employee SET role_id = ? WHERE id = ?;", 
            [roleId, employeeId]
        )
    }
    removeEmployee(employeeId) {
        return this.connection.promise().query(
            "DELETE FROM employee WHERE id = ?",
            employeeId
        );
    }
};

module.exports = new DB(connection);