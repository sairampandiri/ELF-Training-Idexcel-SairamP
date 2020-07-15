console.log("-------loops in JS------");
var a=10;
var count=1
while (count<=10) {
    console.log(a);
    count++;
}

//debugger
console.log("-----debug the code line by line by adding 'debugger'------");
console.log("---To check debugger effect remove comment lines----");
var a=10;
var count=1
while (count<=10) {
   // debugger
    console.log(a);
    count++;
}

//Break keyword
console.log("----Break keyword-----");
var a=10;
var count=1
while (count<10) {
    if (count===5) {
        break;
    }
    console.log(a);
    count++;
}

//Continue Keyword
console.log("-----Continue Keyword-----");
var arrOne=[1,2,3,4,5,6,7,8,9,10]
var index;
for (index = 0; index < arrOne.length; index++) {
    if (index==3) {
        continue;
    }
    console.log("The number is"+arrOne[index]);
    
}

//do while
console.log("---------do while------------");
var num = 1;
 do{
     console.log(num);
     num++
 }while (num >=10) //1

//eg-2
 var num = 1;
 do{
     console.log(num);
     num++
 }while (num <=10) //1 to 10

//for
console.log("---------for loop------------");
var arr = [1,3,5,,67,,78,,2]
arr['name'] = "king"
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(arr[index]);
}

//for of 
console.log("---------for of  ------------");
var arr = [1,3,5,,67,,78,,2]
arr['name'] = "king"
 for (const element of arr) {
     console.log(element);
 }

 //for in
 console.log("====== for in ==========");
 var arr = [1,3,5,,67,,78,,2]
 arr['name'] = "king"
 for (const key in arr) {
     //key is Index
     console.log(arr[key]);
 }
 //example-02
 console.log("example-02");
 var person = {
    name: 'sai',
    age:21,
    salary: 20000
}
for (const key in person) {
   console.log(person[key]);
}