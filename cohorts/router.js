const router = require('express').Router();
const Cohorts = require('./router-model');

router.get('/', (req, res) => {
	Cohorts.all()
		.then(cohorts => {
			res.status(200).json(cohorts);
		})
		.catch(({name, message, stack, code}) => {
			res.status(500).json({name, message, stack, code});
		});
});

router.post('/', (req, res) => {
	Cohorts.addCohort(req.body)
		.then(cohort => {
			res.status(201).json(cohort);
		})
		.catch(err => {
			res.status(500).json({message: 'Failed create Cohort'});
		});
});

router.delete('/:id', (req, res) => {
	Cohorts.remove(id)
		.then(deleted => {
			if (deleted) {
				res.json({removed: deleted});
			} else {
				res.status(404).json({message: 'Could not find scheme with given id'});
			}
		})
		.catch(err => {
			res.status(500).json({message: 'Failed to delete scheme'});
		});
});

module.exports = router;
