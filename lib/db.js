const mysql = require("mysql2");

const db = mysql.createConnection(
	{
		host: "localhost",
		user: "root",
		password: "r00tUser!",
		database: "employees_db",
	},
	console.log("Started!")
);

module.exports = db;
