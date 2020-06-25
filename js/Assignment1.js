//Named Function
function fib(n) {
        if (n <= 1) {
          return n;
        } else {
          return fib(n - 1) + fib(n - 2);
        }
      }
var value=5
var res=fib(value);
console.log("Fibonacci of ",value," is",res);



//Named Function
function isNumber(num) {
    if (num % 2 == 0) {
        console.log(num, "is even number");
    } else {
        console.log(num, "is odd number");

    }
}
isNumber(11)


//Function Expression
var divisible = function(num) {
    if (num%4==0) {
        console.log(num, "is divisible by 4");
    }else {
        console.log(num, "is not divisible by 4");
    }
}
divisible(20)


//IIFE-Immediately Invoked Function Expression
var res=(function (a,b,c){ 
    if (a > b && a > c) {
        console.log(a, "is a big number");
    } else if (b > a && b > c) {
        console.log(b, "is a big number");
    } else {
        console.log(c, "is a big number");
    }})
res(10,20,30);


//Arrow Function
var factorial=(n)=>{
    if (n === 0) {  
        return 1;  
    } 
    else {  
        return n * factorial( n - 1 )
    }   
};
var res=factorial(5)
console.log("Factorial of 5 is"+res);
