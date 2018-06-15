
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var calc = require("./calculate");
//app.use(bodyParser())
app.use(express.json()) 
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
//app.use(bodyParser.json()); // for parsing application/json
// parse various different custom JSON types as JSON
//app.use(bodyParser.json({ type: 'application/*+json' }))

module.exports = app;

app.post("/calculate", function(req, res) {
    //get the variables from the url query
    console.log("*******");
    console.log(Object.keys(req.body));
    console.log(Object.values(req.body));
    let input = req.body.input;
    let calculatorState = req.body.calculatorState;

    let s = calc.calculateNextState(calculatorState,input);
    console.log(typeof (s));
    res.json(s);
});


app.listen(3000, function(){
    console.log("listening to port 3000")});

