function sayHelloBye (name, num) {
	if (num === 1) {
		return "Hello " + name.charAt(0).toUpperCase() + name.substring(1,name.length)
	}
	else return "Bye " + name.charAt(0).toUpperCase() + name.substring(1,name.length)
}
var res=sayHelloBye('sairam',0)
console.log(res);
