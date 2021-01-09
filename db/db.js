const connection = require('./connection');

class DB {
    constructor (connection) {
        this.connection = connection
    }
    createEmployee(employee) {
        return this.connection.promise().query(
            "INSERT INTO employee SET ?;", employee
        )
    }
    createRole(role) {
        return this.connection.promise().query(
            "INSERT INTO role SET ?;", role
        )
    }
    createDepartment(department) {
        return this.connection.promise().query(
            "INSERT INTO department SET ?;", department
        )
    }

    viewDepartment() {
        return this.connection.promise().query(
            "SELECT * FROM department;"
        )
    }

    viewRoles() {
        return this.connection.promise().query(
            "SELECT * FROM roles;"
        )
    }

    viewEmployees() {
        return this.connection.promise().query(
            "SELECT * FROM employees;"
        )
    }

    updateEmployeeRole(roleId, employeeId) {
        return this.connection.promise().query(
            "UPDATE employee SET role_id = ? WHERE id = ?;", [roleId, employeeId]
        )
    }
};

module.exports = new DB(connection);