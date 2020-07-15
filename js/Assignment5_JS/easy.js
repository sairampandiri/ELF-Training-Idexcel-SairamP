//1.Matchstick Houses

function matchHouses(num) {
    if(num==0){
        return 0;
    }else{
        return (num*6)-(num-1);
    }
}
var res=matchHouses(87);
console.log(res);

//2.Is it Time for Milk and Cookies?

function timeForMilkAndCookies(Date) {
  var day = Date.getDate();
  var month =Date.getMonth();
  
  if(day == 24 && month == 11) {
    return true
  } else {
    return false
  }
}
var a=new Date(2013, 11, 24)
var res=timeForMilkAndCookies(a)
console.log(res);

//3.RegEx: Boundary Assertions I

function isJS(file) {
    if (file.slice(-4)==='.jsx' || file.slice(-3)==='.js') {
        return true
    } else {
        return false;
    }
}
var res=isJS("/users/user.js")
console.log(res);

//4.Convert a Number to Base 2

function binary(num) {
    var result = "";
	if (num == 0) {
		result = "0";
	}
	while (num > 0) {
			result += num % 2;
			num = Math.floor(num/2);
		};
	return result.split("").reverse().join("");
}
var res=binary(10)
console.log(res);

//5.Repeating Letters

function doubleChar(str) {
    var result = [];
    for(var i=0;i<str.length;i++){
      result.push(str[i]);
      result.push(str[i]);
    }
    result = result.join("");
    return(result);
  }
var res=doubleChar("1234!_ ")
console.log(res);

//6.Secret Society

function societyName(grp) {
	var name="";
	var grp=grp.sort()
	for(var i=0 ;i<grp.length;i++)
		{
			name+=grp[i][0];
		}
	return name;
}
var res=societyName(["aaa","ccc","bbb"]);
console.log(res)

//7. Hashes and Pluses

function hashPlusCount(input) {
    var hashes = 0;
    var puses = 0;
        
    for(var i=0; i < input.length;i++){
    if(input[i] === '#'){
         hashes++;
    }
    else if(input[i] === '+') {
        puses++;
    }
    }
        
    return [hashes, puses];
    }
    var res=hashPlusCount("###++")
    console.log(res);

//8.Is the Number a Repdigit

function isRepdigit(num) {
	num += "";
	for (i = 0; i < num.length; i++) {
			if (num[i] != num[0]) {
					return false;
			}
	}
	return true;
}
var res=isRepdigit(66)
console.log(res);

//9.Index Shuffle

function indexShuffle(str) {
	var x = "";
	var y = "";
	for (var i = 0; i < str.length; i++)
		{
			if (i % 2 === 0){
                 x += str[i];
            }
			else{
                 y += str[i];
            }
		}
	return x + y;
}
var res=indexShuffle("abcdefg")
console.log(res);

//10.Valid Zip Code

function isValid(zipcode) {
    var digits = ['0','1','2','3','4','5','6','7','8','9'];
    if(zipcode.length<6){
	for(var i = 0; i < zipcode.length; i++){
		if (!digits.includes(zipcode[i])){
             return false;
        }
	}
    return true;
     }else{
         return false;
     }
}
var res=isValid("522426")
console.log(res);

    



