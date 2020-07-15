//Examples on operators
console.log("---Examples on Operators---");
//1.Arithmetic
console.log(10+20);
var a=10;
var b=20;
var c=b-a;
console.log(c);

//pre increment
var a=10;
++a;
console.log(a);
//post increment
var a=10;
console.log(a);
a++;
console.log(a);

//pre decrement
var a=10;
--a;
console.log(a);

//post increment
var a=10;
a--
console.log(a);

console.log("---aritnmetic operators by using Named function---");
function arthm(a,b){
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(b/a);
    console.log(b%a);     
}
arthm(10,20);

//2.Relational or comparison operator ==,!=,>,<,>=,<=.===,!==
console.log("-----comparison or relational operator by using Arrow function----");
var relational=(a,b)=>{
    console.log(a==b);
    console.log(a!=b);
    console.log(a>b);
    console.log(a<b);
    console.log(a>=b);
    console.log(a<=b);
    console.log(a===b);
    console.log(a!==b); 
};
relational(10,20)

//3.logical operator  (and,or,not)
console.log("---Examples on logical operator---");

var a=10
var b=10
var c=23
console.log((a>b)&&(a<b));
console.log((a>=b)&&(a<=b));
//Examples on or operator
console.log("---Example for or operator---");
console.log((a>b)||(a<b));
console.log((a>=b)||(a<b));
//Examples on not operator
console.log("---Example for not operator---");
console.log(!a>=b);
console.log(a>=b);
console.log(!a<=b);
console.log(a<b);
//4.Ternary operator
console.log("---syntax for ternary operator is : (condition)?true statemment:false statement");
var age=19
var res=(age>18)?"audlts":"children"
console.log(res);
//5.typeof opaertor
console.log("---examples for typeof operators---");
console.log(typeof(10));//---->Number is return type of "10"
console.log(typeof(10.20));//---->Number is return type of "10.20"
console.log(typeof("hello"));//---->String is return type of "hello"
console.log(typeof(null));//----->Object is return type of "null"
console.log(typeof(true));//----->boolean is return type of "true"
var undef;
console.log(typeof(undef));//---->undefined is return type of "undef"

//type of Array
console.log("-----type of array is object------");
var myArray=[1,2,3,4,5]
console.log(typeof(myArray));
//by using isArray method
console.log("----In Array there is one method i.e., isArray -It tells us whether it contains array or not.It returns boolean value---- ");
console.log(Array.isArray(myArray));//It returns true
var a=10
console.log(Array.isArray(a));//It returns false

//type of object
console.log("-----type of object is object------");
var man={
    name:"hi"
}
console.log(typeof(man));













































