function clone(arr) {
	arr.push(arr.slice(0))
	return arr
}
  var res=clone([1,2])
  console.log(res);
  