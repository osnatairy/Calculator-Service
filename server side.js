var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var calc = require("./calculate");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/calculate", function(req, res) {
    //get the variables from the url query
    console.log("*******");
    console.log(req.query);

    //let s = calc.calculateNextState()
    return {"display":"1"};
});


app.listen(3000, function(){
    console.log("listening to port 3000")});
