-- Insert department info
INSERT INTO department
    (name)
VALUES
    ('Sales');

INSERT INTO department
    (name)
VALUES
    ('Corporate');

INSERT INTO department
    (name)
VALUES
    ('Marketing');

INSERT INTO department
    (name)
VALUES
    ('Accounting');

INSERT INTO department
    (name)
VALUES
    ('Logistics');

INSERT INTO department
    (name)
VALUES
    ('warehouse');

-- Insert Roles labels here
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Assistant Regional Manager', '75000', 1);

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Regional Manager', '80000', 3);

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Lead Accountant', '65000', 5);

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Head salesman', '60000', 1);

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Logistics Coordinator', '55000', 4);

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Customer Service Lead', '50000', 5);

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('HR Representative', '65000', 3);

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Salesperson', '70000', 1);

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Receptionist', '45000', 5);

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Foreman', '55000.75', 3);

    -- Insert employee info
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Michael', 'Scott', 2, NULL);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Jim', 'Halpert', 1, NULL);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Angela', 'Martin', 3, NULL);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Dwight', 'Schrute', 4, NULL);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Meredith', 'Palmer', 5, NULL);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Kelly', 'Kapoor', 6, NULL);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Toby', 'Flenderson', 7, NULL);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Phyllis', 'Vance', 8, NULL);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Pam', 'Beasly', 9, NULL);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Darryl', 'Philbin', 10, NULL);