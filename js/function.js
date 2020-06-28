//Examples on functions
console.log("");
console.log("----examples on functions-----");
var q=[1,2]
var p=[10,20]
var o=[55,66]
function printArraay(arr){
    console.log(arr[0]);
    console.log(arr[1]);   
}
printArraay(q)

//function inside the function by passing function as argument
console.log("function inside the function by passing function as argument");
function add(){
    console.log("inside add function");
    
}
function sub(a,b,myFun){
    console.log("inside the sub function");
    console.log(b-a);
    myFun()   
}
sub(10,22,add)

//return type when we use functions
console.log("------return type when we use functions------");
function sub(){
    var a=null
    return a;
}
console.log("The return type is :",sub());//null 


function undef(){
    var b;
    return b;
}
console.log("The return type is :",undef());//undefined

function arr(){
    var a=[1,2,3,4,5];
    return a;    
}
console.log("The return type is :",arr());//array


function obj(){
    var a={myArr:[1,2,3]}
    return a;
}
console.log("The return type is :"+obj());//object

console.log("By using two functions");

function printName(name){
    console.log(name);
    return printAge;
}
function printAge(){
    console.log("inside printAge()");
}
printName("sai");

function printName1(name){
    return printAge1;
}
function printAge1(){
    console.log("inside printAge()");
}
var getPrintAge=printName1()
console.log(getPrintAge());














