var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
 it('responds with hello world', function(done) {
  //navigate to root and check the response
  request(app).get('/').expect('hello world', done);
 });
});
