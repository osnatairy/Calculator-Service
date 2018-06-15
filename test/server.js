var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app/server');
var should = chai.should();

chai.use(chaiHttp);


describe('Blobs', function() {    
   
  it('test /calculate POST', function(done) {
    this.timeout(500);
    setTimeout(done, 400);
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
        console.log(res.body);
        /*res.body.should.have.property('SUCCESS');
        res.body.SUCCESS.should.be.a('object');
        res.body.SUCCESS.should.have.property('name');
        res.body.SUCCESS.should.have.property('lastName');
        res.body.SUCCESS.should.have.property('_id');
        res.body.SUCCESS.name.should.equal('Javas');
        res.body.SUCCESS.lastName.should.equal('Script');*/
        done();
      });
  });
});


/*
var expect  = require("chai").expect;
var request = require("request");

describe("Color Code Converter API", function() {

    describe("RGB to Hex conversion", function() {
        
let server
before(function(done) {
  this.enableTimeouts(false)  
  server = require('../app/server')
  server.listen(3000, done)
})
        var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";
        it("returns status 200", function() {
            request(url, function(error, response, body) {
              expect(response.statusCode).to.equal(200);
            });
          });
          let book = {
            calculatorState: null,
            input: "1"
         }
         before(function (done) { done(new Error('failed')); })
      it("returns the color in hex", function() {
        request()
        .post('/calculate')
        .send(book)
        .set('Content-Type','application/json')
       
        //.expect(200,done)
        .end((err, res) => {
            res.should.have.status(200);
      });
    });
  
    });
        var url = "http://localhost:3000/hexToRgb?hex=00ff00";
  
    describe("Hex to RGB conversion", function() {
  
      it("returns status 200", function() {});
  
      it("returns the color in RGB", function() {});
  
    });
  
  });

  var app = require('../app/server')
  , http = require('http');

describe('User API',function(){

  before(function(done){
    http.createServer(app,done);
  });

  it('GET /users should return 200',function(done){
    request()
      .get('/users')
      .expect(200,done);
  });

  it('POST /users should return 200',function(done){
    request()
      .post('/calculate')
      .set('Content-Type','application/json')
      .write(JSON.stringify({ username: 'test', password: 'pass' }))
      
      .expect(200,done)
      .end((err, res) => {
        res.should.have.status(200);
  });
});

  process.env.NODE_ENV = 'test';

  
  let chai = require('chai');
  let chaiHttp = require('chai-http');
  let server = require('../app/server');
  let should = chai.should();
  
  chai.use(chaiHttp);

  /*
  * Test the /POST route
  */
 /*
 describe('/POST book', () => {
    it('it should not POST a book without pages field', (done) => {
      let book = {
         calculatorState: null,
         input: "1"
      }
      chai.request(server)
          .post('/calculate')
          .send(book)
          .end((err, res) => {
              res.should.have.status(200);
              /*res.body.should.be.a('object');
              res.body.should.have.property('errors');
              res.body.errors.should.have.property('pages');
              res.body.errors.pages.should.have.property('kind').eql('required');
            done();
          });
    });

});
});


/*
var http = require('http');
var server = require('../app/server');

// This is just an example HTTP server. Use your own application here.
var server = http.createServer(function(req, res) {
	res.writeHead(200);
	res.end('Hello, Mocha!');
});

// listen strats the server on the given port.
exports.listen = function(port) {
	console.log('Listening on: ' + port);
	server.listen(port);
};

// close destroys the server.
exports.close = function() {
	server.close();
};

describe('HTTP Server Test', function() {
	// The function passed to before() is called before running the test cases.
	before(function() {
		server.listen(3000);
	});

	// The function passed to after() is called after running the test cases.
	after(function() {
		server.close();
	});

	describe('/', function() {
		it('should be Hello, Mocha!', function(done) {
			http.get('http://127.0.0.1:3000', function(response) {
				// Assert the status code.
				assert.equal(response.statusCode, 200);

                                var body = '';
				response.on('data', function(d) {
					body += d;
				});
				response.on('end', function() {
					// Let's wait until we read the response, and then assert the body
					// is 'Hello, Mocha!'.
					assert.equal(body, 'Hello, Mocha!');
					done();
				});
			});
		});
	});
});

/*
var server = require('../app/server');

describe('server', function () {
  before(function () {
    server.listen(8000);
  });

  after(function () {
    server.close();
  });
});

var assert = require('assert'),
    http = require('http');

describe('/', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:3000', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });


});

var expect  = require("chai").expect;
var request = require("request");

describe("Calculator Service API", function() {

  
    describe("Calculator - start from null state", function() {
      var url = "http://localhost:3000/calculate?state=null&input=1";
  
      it("returns status 200", function(done) {
        request(url, function(error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
        });
      });
  
      it("returns the current deisplay", function(done) {
        request(url, function(error, response, body) {
          expect(body).to.equal("1");
          done();
        });
      });

    });

  });
  
*/