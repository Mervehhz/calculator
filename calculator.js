const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const xmark = document.querySelector(".xmark");
const divide = document.querySelector(".divide");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const zero = document.querySelector(".zero");
const dot = document.querySelector(".period");
const ac = document.querySelector(".clear");
const equals = document.querySelector(".equal");
const inp = document.querySelector("input");
var operation = "";
var ops = "+-/*";

eventListeners();

function eventListeners(){

    plus.addEventListener('click', () => {operation += "+"; inp.value=operation;});
    minus.addEventListener('click', () => {operation += "-"; inp.value=operation;});
    xmark.addEventListener('click', () => {operation += "*"; inp.value=operation;});
    divide.addEventListener('click', () => {operation += "/"; inp.value=operation;});
    seven.addEventListener('click', () => {operation += "7"; inp.value=operation;});
    eight.addEventListener('click', () => {operation += "8"; inp.value=operation;});
    nine.addEventListener('click', () => {operation += "9"; inp.value=operation;});
    four.addEventListener('click', () => {operation += "4"; inp.value=operation;});
    five.addEventListener('click', () => {operation += "5"; inp.value=operation;});
    six.addEventListener('click', () => {operation += "6"; inp.value=operation;});
    one.addEventListener('click', () => {operation += "1"; inp.value=operation;});
    two.addEventListener('click', () => {operation += "2"; inp.value=operation;});
    three.addEventListener('click', () => {operation += "3"; inp.value=operation;});
    zero.addEventListener('click', () => {operation += "0"; inp.value=operation;});
    dot.addEventListener('click', () => {operation += "."; inp.value=operation;});
    ac.addEventListener('click', allClear);
    equals.addEventListener('click', result);
    allClear();
}

function allClear(e){
    operation = "";
    inp.value=operation;
}

function result(e){

    let i, first, second, result;

    for(i=0;i<operation.length;i++){
        if(operation[i] === "*" || operation[i] === '/'){
            first = getFirst(i);
            second = getSecond(i);
            result = stringToOperator(first, second, operation[i]);
            addToString(i-first.toString().length, i+second.toString().length+1, result);
            i = i-first.toString().length+result.toString().length-1;
        }
    }
    
    for(i=0;i<operation.length;i++){
        if(operation[i] === "+" || operation[i] === '-'){
            first = getFirst(i);
            second = getSecond(i);
            result = stringToOperator(first, second, operation[i]);
            addToString(i-first.toString().length, i+second.toString().length+1, result);
            i = i-first.toString().length+result.toString().length-1;
        }
    }
    inp.value=operation;
}

function getFirst(index){
    
    let number = 0;

    for(let i=index-1, j=0;i>-1 && operation[i] !== ops[0] && operation[i] !== ops[1]
        && operation[i] !== ops[2] && operation[i] !== ops[3];i--,j++){
            number += operation[i]*Math.pow(10,j);
        }
    return number;
}

function getSecond(index){

    let number = "";

    for(let i=index+1;i<operation.length && operation[i] !== ops[0] && operation[i] !== ops[1]
        && operation[i] !== ops[2] && operation[i] !== ops[3];i++){
            number += operation[i];
        }
    return parseFloat(number);
}

function addToString(index1, index2, result){

    let substring = operation.substring(index2, operation.length);
    let i, temp=operation.substring(0, index1);

    temp += result;
    temp += substring;

    operation = temp;
}

function stringToOperator(first, second, op){
    switch(op){
        case "*": return first*second;
        break;
        case "/": return first/second;
        break;
        case "+": return first+second;
        break;
        case "-": return first-second;
        break;
        default: "error";
    }
}