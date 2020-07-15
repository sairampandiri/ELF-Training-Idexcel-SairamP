console.log("------Hard-------");

//1.Oddish vs. Evenish

function oddishOrEvenish(num) {
    var sum = 0;
    
    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
        if(sum % 2 == 0){
             return 'Evenish';
        }
        else { 
            return 'Oddish';
        }
}
var res=oddishOrEvenish(43)
console.log(res);

//2.Seven Boom!

function sevenBoom(arr) {
	var new_arr= arr.join('')
	if(new_arr.includes(7)){
		return "Boom!";
	}else{
		return "there is no 7 in the array";
	}
}
var res=sevenBoom([1, 2, 3, 4, 5, 6, 7])
console.log(res);

//3.Broken Keyboard

function findBrokenKeys(str1, str2) {
	str1 = str1.split('');
	str2 = str2.split('');
	let incorr = [];
	let i = 0;
	for(let i = 0; i < str1.length; i++){
		if(str1[i] !== str2[i]){
			if(!incorr.includes(str1[i])){
					incorr.push(str1[i]);
			}
		}
	}
	return incorr;
}
var res=findBrokenKeys("happy birthday", "hawwy birthday")
console.log(res);

//4. Factor Tractor

function primeFactorize(num) {
    var factors = [];
    for(var i = 2; i <= num; i++) {
      while(!(num%i)) {
        factors.push(i);
        num /= i;
      }
    }
    return factors;
  }
  var res=primeFactorize(77)
  console.log(res);