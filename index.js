const promptAction = require("./lib/prompt");
const db = require("./lib/db");

(async () => {
	({action} = await promptAction());

	let sql;

	switch (action) {
		case "all_departments":
			sql = "SELECT * FROM department";
			db.query(sql, (err, results) => {
				if (!err) {
					console.table(results);
				} else {
					console.error(err);
				}
			});
			break;
		case "all_roles":
			sql =
				"SELECT role.id, role.title, role.salary, department.name AS department FROM role JOIN department ON department.id = role.department_id";
			db.query(sql, (err, results) => {
				if (!err) {
					console.table(results);
				} else {
					console.error(err);
				}
			});
			break;
		case "all_employees":
			sql =
				"SELECT employee.first_name, employee.last_name, role.title AS role, role.salary, department.name AS department, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id LEFT JOIN employee AS manager ON employee.manager_id = manager.id";
			db.query(sql, (err, results) => {
				if (!err) {
					console.table(results);
				} else {
					console.error(err);
				}
			});
			break;
		case "add_department":
			break;
		case "add_role":
			break;
		case "add_employee":
			break;
		case "update_role":
			break;
	}
})();

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
