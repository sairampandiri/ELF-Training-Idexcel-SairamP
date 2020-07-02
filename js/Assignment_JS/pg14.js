function calculator(num1, operator, num2) {
	switch (operator) {
		case '+':
            return num1 + num2;
		case '-':
            return num1 - num2;
		case '*':
			return num1 * num2;
		case '/':
            return num1 / num2;
        default:
            console.log("Only arthmetic calculations");
            break;
            
	}
}
var res=calculator(1,'+',20);
console.log(res);
