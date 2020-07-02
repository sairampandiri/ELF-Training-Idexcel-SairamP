function oneOddOneEven(n) {
	let x = n.toString().split('');
	if(x[0] % 2 == 0 && x[1] % 2 !== 0) return true;
	if(x[1] % 2 == 0 && x[0] % 2 !== 0) return true;
	return false;
}
var res=oneOddOneEven(12)
console.log(res);
