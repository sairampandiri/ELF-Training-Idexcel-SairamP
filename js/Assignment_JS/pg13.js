function factorGroup(num) {
	var sum = 0;
	for (var i  = 1; i <= num; i++){
		if (num%i == 0){
			sum = sum + 1;
		}
	}
	if (sum % 2 == 0){
		return "even";
	}else{
		return "odd";
	}
}
var res=factorGroup(33)
console.log(res);
