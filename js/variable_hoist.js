//Variable Hosting-Moving the declartion at the top and it will use to avoid the bugs
console.log("------variable hosting-------");
//example1
console.log("-----example by giving declaration(after initailizing)----- ");
var hoist1;
console.log(hoist1);
hoist1="hello"
console.log(hoist1);

function hoisting(){
    console.log(msg);
    console.log(hoist1);
    var msg = "hello world"
    console.log(msg);
}
hoisting()
//example2
console.log("-----example by without declaration----- ");
var hoist;
console.log("hoist");
function hoisting() {
    console.log(msg);//Reference error
}