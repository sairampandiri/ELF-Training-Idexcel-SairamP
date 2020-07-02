function sumOfCubes(num) {
	var sum = 0;
	var l = num.length;
	for (var i = 0; i < l; i++){
		sum += Math.pow(num[i],3);
	}
	return sum;
}
var x=[1,5,9];
var res=sumOfCubes(x);
console.log("The sum of cubes of the array of the number is :",res);
