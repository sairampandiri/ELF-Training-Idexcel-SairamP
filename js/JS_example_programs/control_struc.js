console.log("-----Control Structures in JS-----");
//1.if
var myboolean = true;
if (myboolean) {
    console.log("Condition is true");

}

//2.if-else
var a = 20;
var b = 30;
if (a > b) {
    console.log("a is greater");
} else {
    console.log("b is greater");
}

//3.if else-if
var marks = 54;
if (marks >= 90 && marks <= 100) {
    console.log("A");
} else if (marks >= 75 && marks <= 89) {
    console.log("B");
} else if (marks >= 50 && marks <= 74) {
    console.log("C");
} else {
    console.log("F");

}

//4.switch
var option = 'D'
switch (option) {
    case 'A':
        console.log("Wrong Answer");
        break;
    case 'B':
        console.log("Wrong Answer");
        break;
    case 'C':
        console.log("Wrong Answer");
        break;
    case 'D':
        console.log("Correct Answer");
        break;
    default:
        console.log("invalid option");
        break;
}