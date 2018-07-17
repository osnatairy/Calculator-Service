var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app/server');
var should = chai.should();

chai.use(chaiHttp);

describe('Calculator-server#1', function() {    
  var state = null;
  it('test /calculate POST', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "1"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('1');
        state = res.body;
        done();
      });
  });

  it('test /calculate POST', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "+"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('1');
        state = res.body;
        done();
      });
  });
  
  it('test /calculate POST', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "3"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('3');
        state = res.body;
        done();
      });
  });

  it('test /calculate POST', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "="
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('4');
        state = res.body;
        done();
      });
  });

});
