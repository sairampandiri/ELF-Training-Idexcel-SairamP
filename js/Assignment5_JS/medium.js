//1.Orthogonal Vector
console.log("--------Medium----------");

function isOrthogonal(arr1, arr2) {
    var sum=0;
    if(arr1.length==arr2.length){
	for(var i=0; i<arr1.length;i++){
		sum+=arr1[i]*arr2[i];
	}
	if(sum===0)
		return true;
	else
        return false;
}else{
    return false;
}
	
}
var res=isOrthogonal([1, 2], [2, -1,3])
console.log(res);

//2.Hitting the Jackpot

function testJackpot(arr) {
    if(arr.length==4){
        for(var i=0; i<arr.length;i++){
            if (arr[i]!==arr[0]) {
                return false;
            }
        }
        return true;
    }else{
        return false;
    }
}
var res=testJackpot(["@", "@", "@", "@"])
console.log(res);

//3.All About Anonymous Functions: Adding Suffixes

function add_ly(input) {
    var suffix="ly"
    var result=input+suffix;
    return result;
}
var res=add_ly("total");
console.log(res);

//4.Algebra Sequence — Boxes

function boxSeq(size) {
    if(size%2==0){
        return size;
    }else{
        return size+2;
    }
}
var res=boxSeq(2);
console.log(res);

//5.Square Every Digit

function squareDigits(num1) {
     var digit=""+num1;
    var res=digit.split("")
    var total="";
    for (var i = 0; i < res.length; i++) {      
        total+=res[i]*res[i]
    }
    return total;
}
var r=squareDigits(9119)
console.log(r);

//6.Fix the Error : Value vs. Reference Types

function checkEquals(arr1, arr2) {
    if(arr1.length===arr2.length){
        for(var i=0; i<arr1.length; i++){
        if (arr1[i]!==arr2[i]){
        return false;
        }
    }
    }else{
        return false;
    }
    return true;
    }
var a=[1,2,6]
var b=[1,2,6]
var res=checkEquals(a,b)
console.log(res);

//7.Triangular Number Sequence

function triangle(sequence) {
    var sum=0;
    for(var i=sequence;i>=1;i--){
        sum+=i;
        
    }
    return sum;
}
var res=triangle(6);
console.log(res);


//8.Xs and Os, Nobody Knows

function XO(str) {
    var x = 0, o = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === 'x') {
        x += 1;
      } else if (str[i].toLowerCase() == 'o') {
        o += 1;
      }
    }
    return x === o;
  }
var res=XO("ooxx")
console.log(res);

//9.Remove Trailing and Leading Zeros

function removeLeadingTrailing(n) {
	return Math.abs(n);
}
var res=removeLeadingTrailing("230.000")
console.log(res);

//10.Neatly Formatted Math

function formatMath(expr) {
	var arr = expr.split(" ");
	var res= parseInt(arr[0]);
	var res1 = parseInt(arr[2]);
	if(arr[1]=="+"){
		return expr+" = "+(res+res1);
	}
	else if(arr[1]=="-"){
		return expr+" = "+(res-res1);
	}
	else if(arr[1]=="x"){
		return expr+" = "+(res*res1);
	}
	else if(arr[1]=="/"){
		return expr+" = "+(res/res1);
	}   
}
var res=formatMath("3 + 4")
console.log(res);