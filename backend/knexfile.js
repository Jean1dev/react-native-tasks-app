module.exports = {
	client: 'postgresql',
	connection: {
		database: 'tasks',
		user: 'jeanfernandes',
		password: 'admin'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
