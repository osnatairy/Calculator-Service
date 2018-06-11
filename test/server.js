/*
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
