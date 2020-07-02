function factorChain(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
      var  s=arr[0]
		if ((arr[i + 1] % s)!=0){
            return false;
        }
	}
	return true;
}
var res=factorChain([2,4,6,8])
console.log("The factor of the chain is:",res);

