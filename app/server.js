
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
 
app.post("/calculate", function(req, res) {
    //get the variables from the url query
    console.log("*******");
    console.log(req.body);

    //let s = calc.calculateNextState()
    return {"display":"1"};
});


app.listen(3000, function(){
    console.log("listening to port 3000")});


/*
const express = require('express');
const app = new express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000 , () => console.log("Listening on 3000"));

app.post('/api', (req, resp) => {
  console.log(req.body.increment);
  //resp.send({ hello: 'world' });
});
*/
/*
const express = require('express');
var bodyParser = require('body-parser');

const app = express();


let counter = 0

//app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/counter', function(req, res) {
  console.log(req.method)

  res.json({value: counter})
})

app.post('/counter', function(req, res) {
  const increment = parseInt(req.query['increment'] || '1')
  console.log(req.query)
  console.log(req.body)
  //console.log(req)
  counter += increment

  res.json({value: counter})
})

app.get('/foo', (req, res) => {
  const text = readFile('foo.html')

  res.send(text)
})

app.listen(3000, () => console.log('listening...'))

*/