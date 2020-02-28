const db = require('../data/dbConfig');

module.exports = {
	all,
	addCohort,
	remove
};

function all() {
	return db('cohorts');
}

function addCohort(cohort) {
	return db('cohorts').insert(cohort, 'id');
}

function remove(id) {
	return db('cohorts')
		.where({id})
		.del();
}
