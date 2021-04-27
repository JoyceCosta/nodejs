const Sequelize = require("sequelize");

const sequelize = new Sequelize("database", "username", null, {
	dialect: "mysql",
	host: "localhost",
	port: 3306,
	protocol: null,
	logging: false,
	dialectOptions: {
		socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
		supportBigNumbers: true,
		bigNumberStrings: true,
	},
});

module.exports = sequelize;
