// Run Inquirer questions to get info about employee

// Inquirer and write file require variables
const inquirer = require('inquirer');

const db = require('./db/db.js');

// array of questions to get info about the employee
const promptManager = () => {
    return inquirer.prompt([
        {
            type: "checkbox",
            name: "manager_input",
            message: "What would you like to do?",
            choices: ["View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
                "Quit"
            ]
        },
    ])

    // add a quit running inquirer
        .then(userInput => {
            console.log(userInput)
            switch (userInput.manager_input) 
            // add a quit 
            {
                case "View all departments":
                    // display departments
                    displayDepartments();
                    break;
                case "View all roles":
                    // display roles
                    displayRoles();
                    break;
                case "View all employees":
                    // display employees
                    displayEmployees();
                    break;
                case "Add a department":
                    // add department
                    createDepartment();
                    break;
                case "Add a role":
                    // add role
                    createRole();
                    break;
                case "Add an employee":
                    // add an employee
                    createEmployee();
                    break;
                case "Update employee role":
                    // update employee
                    updateEmployeeRole();
                    break;
            }
        })
};

function displayDepartments() {
    db.viewDepartment()
    .then(data => {
        let departments = data
        console.table(departments)
    })
    .then(() => {
        return promptManager();
    })
};

function displayRoles() {
    db.viewRoles()
    .then(data => {
        let roles = data
        console.table(roles)
    })
    .then(() => {
        return promptManager();
    })
};

function displayEmployees() {
    db.viewEmployee()
    .then(data => {
        let  = data
        console.table(employees)
    })
    .then(() => {
        return promptManager();
    })
};

function createDepartment() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is the name of the department?",
        }
    ])
    .then(data => {
        let name = data;
        db.createDepartment(name)
        .then(() => promptManager());
    })
};

function createRole() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is the name of the role?",
        },
        {
            name: "name",
            message: "What is the salary of this role?"
        },
        {
            name: "name",
            message: "What is the department this role will be located in?"
        }
    ])
    .then(data => {
        let name = data;
        db.createRole(name)
        .then(() => promptManager());
    })
};

function createEmployee() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is the employee's first name?",
        },
        {
            name: "name",
            message: "What is the employee's last name?"
        },
        {
            name: "name",
            message: "What is the employee's role?"
        },
        {
            name: "name",
            message: "Who does the employee report to?"
        }
    ])
    .then(data => {
        let name = data;
        db.createEmployee(name)
        .then(() => promptManager());
    })
};

function updateEmployeeRole() {
    console.log('Updating employee roles');
    const query = connection.query(
        'UPDATE roles SET ? WHERE ?',
        [
            {

            },
            {

            }
        ],
        function(err, res) {
            if (err) throw err;
            console.log(res.affectedRoles + ' roles updated!\n');
        }
    );
    console.log(query.sql);
};

// function to initialize
promptManager();
// make sure to require db.js file out of db folder

