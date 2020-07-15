//count of true
function countTrue(lst){
	var count = 0;
	for(var i = 0; i < lst.length; i++){
		if(lst[i] === true){
			count++;
		}
	}
	return count;
}
//var a=[true,true,true]
var res=countTrue([true,true,true])
console.log(res);
