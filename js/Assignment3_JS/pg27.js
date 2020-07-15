function reverseAndNot(i) {
	var reverse = i.toString().split("").reverse().join("");
	return +(reverse + i);
}
var res=reverseAndNot(123)
console.log(res);
