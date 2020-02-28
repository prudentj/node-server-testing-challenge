exports.up = function(knex) {
	return knex.schema
		.createTable('cohorts', tbl => {
			tbl.increments();
			tbl.string('name', 150).notNullable();
		})
		.createTable('students', tbl => {
			tbl.increments();
			tbl.string('name', 150).notNullable();
		})
		.createTable('student_cohorts', tbl => {
			tbl.increments();
			tbl
				.string('cohort_id')
				.notNullable()
				.references('cohorts.id');
			tbl
				.string('student_id')
				.notNullable()
				.references('student.id');
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('student_cohorts')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('cohorts');
};
