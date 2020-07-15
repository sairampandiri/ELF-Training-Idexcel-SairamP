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