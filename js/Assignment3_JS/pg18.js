function indexMultiplier(arr) {
    var r = 0;
for (var i in arr) {
    r += i * arr[i];
}
return r;
}
var res=indexMultiplier([1,2,3,4,5])
console.log(res);
