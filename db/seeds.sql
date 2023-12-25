USE employees_db;

INSERT INTO department (name) 
VALUES 
  ('Human Resources'), 
  ('Engineering'), 
  ('Sales'), 
  ('Marketing');

INSERT INTO role (title, salary, department_id) 
VALUES 
  ('HR Manager', 70000.00, 1),
  ('HR Assistant', 45000.00, 1),
  ('Lead Engineer', 90000.00, 2),
  ('Engineer', 75000.00, 2),
  ('Sales Manager', 80000.00, 3),
  ('Sales Representative', 55000.00, 3),
  ('Marketing Manager', 85000.00, 4),
  ('Marketing Analyst', 60000.00, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES 
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Roe', 2, 1),
  ('Alice', 'Johnson', 3, NULL),
  ('Bob', 'Brown', 4, 3),
  ('Charlie', 'Davis', 5, NULL),
  ('Diana', 'White', 6, 5),
  ('Eve', 'Black', 7, NULL),
  ('Frank', 'Wright', 8, 7);