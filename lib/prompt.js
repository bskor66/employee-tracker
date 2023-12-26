const inquirer = require("inquirer");

const actions = [
	{
		type: "list",
		name: "action",
		message: "What would you like to do:",
		choices: [
			{name: "view all departments", value: "all_departments"},
			{name: "view all roles", value: "all_roles"},
			{name: "view all employees", value: "all_employees"},
			{name: "add a department", value: "add_department"},
			{name: "add a role", value: "add_role"},
			{name: "add an employee", value: "add_employee"},
			{name: "update an employee role", value: "update_role"},
		],
	},
];

const promptAction = async () => {
	action = await inquirer.prompt(actions);
	return action;
};

module.exports = promptAction;
