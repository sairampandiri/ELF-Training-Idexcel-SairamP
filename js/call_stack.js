console.log("Start of app");
function first() {
    setTimeout(function(){
     console.log("first function");
        
    },0)
}
function second() {
    setTimeout(function(){
    console.log("Second Function");
},0)
}
first()
second()
console.log("end of app");