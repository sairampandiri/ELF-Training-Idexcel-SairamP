var arr=[]
arr[0]=1;
arr[1]=2;
arr[2]=3;
arr[3]=4;
console.log(arr);
var arr1=[1,,2,3,4]
console.log(arr1);


var arr2=[];
arr[0]=1;
arr[1]=2;
arr[2]=3;
arr[3]=4;
arr['name']="pavan";
console.log(arr);

var arr3=[];
console.log(arr3.length);
console.log(arr1.length);

var arr=[]
arr[0]=5
arr[5]=1;
console.log(arr[1]);

console.log("----array methods-----");
//1.Array.isArray()-It checks it is array or not and it returns boolean value
var arr=[1,2,3,4,5,6,7]
var isArray=Array.isArray(arr)
console.log(isArray);

//2.includes(searchElement,fromIndex)-It checks the element is in the array or not by using index and the return type is boolean
var arr=[1,2,3,4,5,6,7]
var included=arr.includes(2);
console.log(included);//true
//example-02
console.log("--Example-02 on includes(searchElement,fromIndex)--");
var included=arr.includes(2,2);
console.log(included);//false

//3.indexOf(searchElement,fromIndex)-It returns the position of the index value.If there is no value then it will returns -1
var index=arr.indexOf(3)
console.log(index);//2

//example-02
console.log("--Example-02 on indexOf(searchElement,fromIndex)--");
var index=arr.indexOf(9,3)
console.log(index);//-1

//example=03
console.log("--Example-03 on indexOf(searchElement,fromIndex)--");
var index=arr.indexOf(3,3)
console.log(index);//-1













