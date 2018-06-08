var expect    = require("chai").expect;
var calculator = require("../app/calculate");

describe("test for 12", function() {
    var s = null
    it("check1", function() {
        s = calculator.calculateNextState(s, "1")  
        expect(JSON.parse(s).display).to.equal('1');     
    });   
    it('check2', async () => {
        s = calculator.calculateNextState(s, '2')
        expect(JSON.parse(s).display).to.eql('12');
    });    
});
