function multiply(text, num) {
	if(num>0) {
		return text + multiply(text, num-1);
	} else {
        return ''
    }
}
var res=multiply("sai",3);
console.log("The result after repition is:",res);
