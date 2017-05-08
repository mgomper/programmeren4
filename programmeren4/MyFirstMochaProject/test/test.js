var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();

chai.use(chaiHttp);

describe('API Test 1', function() {
  it('Test GET /api/v2/recipes', function(done) {
    chai.request(server)
    .get('/api/v2/recipes')
    .end(function(err, res) {
        res.should.have.status(200);
        res.body.should.be.a('array');
    done();
 });
 });
});


describe('API Test 2', function() {
  it('Test GET /api/v2/recipes/1', function(done) {
    chai.request(server)
    .get('/api/v2/recipes/1')
    .end(function(err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
    done();
 });
 });
});
