var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app/server');
var should = chai.should();

chai.use(chaiHttp);


describe('Blobs', function() {    
   
  it('test /calculate POST', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: null,
        input: "1"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.should.have.property('display');
        res.body.display.should.equal('1');
        done();
      });
  });
});
