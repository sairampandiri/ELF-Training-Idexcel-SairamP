//IIFE-Immediately Invoked Function Expression
(function (){ 
    var a=10
    var b=20
    var c=(a+b)/2
    console.log("The average of two numbers is",c);})()

//Named Function
function square(number){
    console.log((number*number),"is the square of",number)
}
square(10)

//Function Expression
var gretestOfThreeNumbers=function(a,b,c){
    var final=(a>b)?((a>c)?a:c):(b>c)?b:c
    console.log(final,"is the gretest among the three numbers",a,b,c)
}
var res=gretestOfThreeNumbers(300,140,220)

//Arrow Function
var areaOfCircle=(radius)=>{
    console.log("area of circle is :",3.14*radius*radius);
};
areaOfCircle(7)


//Named Function
function isEven(num) {
    var res= num % 2 === 0;
    console.log("If it is True it is even number and if it is False it is odd number :-",res);
    
  }
isEven(11)
