//Examples for Primitive types
console.log("examples for primitive types");

//1.number
var mynum=10;
console.log(mynum);

//2.string
var myString="hello"
console.log(myString);

//3.null
var myVar=null;
console.log(myVar);

//4.boolean
var boolValue=false
console.log(boolValue);

//5.undefined
var value;
console.log(value);


//Examples for reference/non-primitive
console.log("Examples for reference/non-primitive data types");
//1.Array
var arrayName=[1,,2,3,4,5]
console.log(arrayName);
console.log(arrayName[0]);
console.log(arrayName[1]);
arrayName[1]=10;
console.log(arrayName);
console.log(arrayName[1]);
console.log("----------Giving array elements by using index-----------");
var arrayName1=[]
arrayName1[0]=9
arrayName1[1]=8
arrayName1[3]=7
console.log(arrayName1);
console.log(arrayName1[2]);
console.log("------------Another method to create array--------------");

var arrName=new Array(10,20,30);
arrName[1]=100
console.log(arrName);


console.log("--------Array is a both homogeneous and hetrogeneous--------");
var fullName;
var arrayName=[10,"hello",null,fullName]
console.log(arrayName);

//2.Object
console.log("---Examples on Object data type---");

var Employee={
    id:101,
    name:'sai',
    designation:'software devolper',
    salary:80000,
    address:'Near Arsh public school',
    mobile:'8897388973',
    isMarried:'false',
    bloodGroup:'B+',
    dapartment:12,
    mgrid:20,
    location:'BNG'
}
console.log(Employee);

//3.Date
//In java script Jan-0,Feb-1----Dec-11,Sun-0,Mon-1,---Satur-6
console.log("-------Examples on Date datatype-------");
var today=new Date()
console.log(today);//To get the current date

console.log(new Date(2020 ,02,28,12,20,10));//To get the format of the date by giving in the order 1.year 2.month 3.date 4.time(hours,minutes,seconds)

console.log(new Date(100000000));//It we 10 crore millisecinds it will change 1 day

console.log(new Date("october,12,2001,11:00:00"));//Fri Oct 12 2001 11:00:00 GMT+0530 (India Standard Time)

console.log("-------example to print date in the format of Month Day Date------");
var months=['jan','feb','mar','apr','may','jun','july','aug','sep','oct','nov','dec']
var days=['sun','mon','tue','wens','fri','sat']
console.log(months[today.getMonth()]+" "+days[today.getDay()]+" "+today.getDate());

console.log("-----------Date methods--------");
var today=new Date()
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDay());
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log("getTime() works as Date.now() and returns in milliseconds",today.getTime());
console.log("Date.now() works as getTime() method and returns in milliseconds",Date.now());

//4.Math
console.log("-----------Math is a data type(Non-Primitive)----------");

console.log("----------Math Methods-------");
console.log(Math.PI);
console.log(Math.round(12.3));
console.log(Math.pow(2,2));
console.log(Math.sqrt(16));
console.log(Math.abs(-12));
console.log(Math.abs(12));
console.log(Math.ceil(9.2));
console.log(Math.ceil(9.8));
console.log(Math.floor(8.01));
console.log(Math.min(1,2,3,4,7,9));
console.log(Math.max(1,2,3,11,21,9,8));
console.log("The range of random() is greaterthan zero(>0) and lessthan one(<1)", Math.random());

console.log("----------Function Data type---------");
//1.Named Function
function add(a,b) {
    console.log(a+b);
    // return a+b   
}
add(1,2)

//2.Function Expression
var getName = function(){
    return "hi";
}
console.log(getName());

//3.IIFE-Immediately Invoked Function Expression
(function() {
console.log("IIFE");
})()

//4.Arrow Function
var getDate = () =>{
    return new Date()
}
console.log(getDate());