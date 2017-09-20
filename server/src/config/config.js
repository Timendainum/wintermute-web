module.exports = {
	port: process.env.PORT || 8801,
	db: {
		database: process.env.DB_NAME || "wintermute",
		user: process.env.DB_USER || "wintermute",
		password: process.env.DB_PASS || "wintermute",
		options: {
			dialect: process.env.DIALECT || "sqlite",
			host: process.env.HOST || "localhost",
			storage: "./tabtracker.sqlite"
		}
	}
};
