// Run Inquirer questions to get info about employee

// Inquirer and write file require variables
const inquirer = require('inquirer');

const db = require('./db/db.js');
require("console.table");



// array of questions to get info about the employee
const promptManager = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "manager_input",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View all departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "View all roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "View all employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "Add a department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Add a role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Add an employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Update an employee role",
                    value: "UPDATE_EMPLOYEE"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        },
    ])
        .then(userInput => {
            
            switch (userInput.manager_input) 
            // add a quit 
            {
                case "VIEW_DEPARTMENTS":
                    // display departments
                    displayDepartments();
                    break;
                case "VIEW_ROLES":
                    // display roles
                    displayRoles();
                    break;
                case "VIEW_EMPLOYEES":
                    // display employees
                    displayEmployees();
                    break;
                case "ADD_DEPARTMENT":
                    // add department
                    createDepartment();
                    break;
                case "ADD_ROLE":
                    // add role
                    createRole();
                    break;
                case "ADD_EMPLOYEE":
                    // add an employee
                    createEmployee();
                    break;
                case "UPDATE_EMPLOYEE":
                    // update employee
                    updateEmployeeRole();
                    break;
                default:
                    quit();
            }
        })
};

// View departments
function displayDepartments() {
    db.viewDepartments()
    .then(([data]) => {
        let departments = data
        console.table(departments)
    })
    .then(() => {
        return promptManager();
    })
};

// View roles
function displayRoles() {
    db.viewRoles()
    .then(([data]) => {
        let roles = data;
        console.log("\n");
        console.table(roles)
    })
    .then(() => {
        return promptManager();
    })
};

// View employees
function displayEmployees() {
    db.viewEmployees()
    .then(([data]) => {
        let employees = data
        console.table(employees)
    })
    .then(() => {
        return promptManager();
    })
};

// Add a department
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

// Add a role
function createRole() {
    db.viewDepartments().then(([data]) => {
        let departments = data;
        const departmentChoices = departments.map(({ id, name }) => ({
            name: name, 
            value: id
        }));
    
    inquirer.prompt([
        {
            name: "title",
            message: "What is the name of the role?",
        },
        {
            name: "salary",
            message: "What is the salary of this role?"
        },
        {
            type: "list",
            name: "department_id",
            message: "What is the department this role will be located in?",
            choices: departmentChoices

        }
    ])
    .then(role => {
        db.createRole(role)
        .then(() => console.log(`Added ${role.title} to the database`))
        .then(() => promptManager());
    })
})
};

// Add an employee
function createEmployee() {
    inquirer.prompt([
        {
            name: "first_name",
            message: "What is the employee's first name?",
        },
        {
            name: "last_name",
            message: "What is the employee's last name?"
        },
    ])
    .then(data => {
       let first_name = data.first_name;
       let last_name = data.last_name;

       db.viewRoles()
       .then(([data]) => {
           let roles = data;
           const roleChoices = roles.map(({ id, title }) => ({
            name: title,
            value: id
           }))

           inquirer.prompt({ 
               type: "list",
                name: "role_id",
                message: "What is the employee's role?",
                choices: roleChoices
           })
            .then(() => console.log(`Added ${first_name} ${last_name} to the database!`))
            .then(() => promptManager())
       })
    })
};

// Update an employee role
function updateEmployeeRole() {
    db.viewEmployees()
    .then(([data]) => {
        let employees = data;
        const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
            name: `${first_name} ${last_name}`,
            value: id
        }));

    prompt([
        {
            type: "list",
            name: "employeeId",
            message: "Which employee's role would you like to update?",
            choices: employeeChoices
        }
    ])
    .then(data => {
        let employeeId = data.employeeId;
        db.viewRoles()
        .then(([data]) => {
            let roles = data;
            const roleChoices = roles.map(({ id, title }) => ({
                name: title,
                value: id
            }));

            prompt([
                {
                    type: "list",
                    name: "roleId",
                    message: "What role would you like to assign the employee?",
                    choices: roleChoices
                }
            ])
            .then(data => db.updateEmployeeRole(employeeId, data.roleId))
            .then(() => console.log("Employee's role has been updated"))
            .then(() => promptManager())
        });
    });
})
};

function quit() {
    console.log("Goodbye!");
    process.exit();
}

// function to initialize
promptManager();
// make sure to require db.js file out of db folder

