const request = require('supertest');
const server = require('../api/server.js');

describe('cohorts router', function() {
	test('should run the tests', function() {
		expect(true).toBe(true);
	});
	describe('GET/', function() {
		test('should return 200 OK', function() {
			return request(server)
				.get('/api/cohorts')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});
		test('should return cohorts as the router value', function() {
			request(server)
				.get('/api/cohorts')
				.then(res => {
					expect(res.body.router).toBe('cohorts');
				});
		});
		test('should return cohorts as the router value(async version)', async function() {
			const res = await request(server).get('/api/cohorts');
			expect(res.body.router).toBe('cohorts');
		});
	});
});
