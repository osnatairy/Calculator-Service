//we define 4 state:
//0 - start - everything is empty
//1 - the player press number after start or after "="
//2 - the player press operator after start or after number
//3 - the player press number after opperator

var obj = {
    "num1": 0,
    "num2": 0,
    "display" : "",
    "operator": "",
    "state" : 0            
}

function setState(){
    return obj;                
}

exports.calculateNextState = function(s, value) {
    console.log("curr state " + s)
    if(s == null){
        s = setState();
        console.log("s was null ")
    }
    else
    {
        s = JSON.parse(s);
        console.log("s was state")
    }
    //define the input value type
    switch (value) {
        case "-":
        case "+":
        case "*":
        case "/":  
            console.log("setOperator");                 
            return JSON.stringify(setOperator(s,value));                    
            break;
        case "=":
            console.log("calculate");
            return JSON.stringify(calculate(s));
            break;
        default: //probably a number
            console.log("addNumber");
            return JSON.stringify(addNumber(s,value));
            break;
    }              
}

function setOperator(s, val){
    s.operator = val;
    if(s.state != 1)
        s.num1 = operate(s)
    else
        s.num1 = s.num2;
    s.display = s.num1.toString();            
    s.state = 2;
    return s;   
}

function calculate(s){
    
    switch (s.state) {
        case 0:                    
        case 2:
            s.state = 0;
            break;
        case 1:
        case 3:
            s.state = 1;
            break;    
    }    

    s.num2 = operate(s);
    s.display = s.num2.toString();
    return s;                 
}

function operate(s){

    let n1 = parseInt(s.num1);
    let n2 = parseInt(s.num2);
    let num = 0;
    switch (s.operator) {
        case "-":
            num = n1 - n2;
            break;
        case "+":
            num = n1 + n2;
            break;
        case "*":
            num = n1 * n2;
            break;
        case "/": 
            num = n1 / n2;
            break;  
    }
    return num
}
function addNumber(s, val)
{
    switch (s.state) {
        case 0:
            s.state = 1
            s.num2 = val;
            s.display = s.num2.toString();
            break;
        case 1:
            console.log("state 1")
            s.num2 = addValToNum(s.num2, val);
            s.display = s.num2.toString();
            console.dir(s)
            break;
        case 2:
            s.state = 3
            s.num2 = val;
            s.display = s.num2.toString();
            break;
        case 3:
            s.num1 = addValToNum(s.num2, val);
            s.display = s.num1.toString();
            break;    
    }  
    
    return s; 
}

function addValToNum(num, val)
{
    return parseInt(num) * 10 + parseInt(val);
}
