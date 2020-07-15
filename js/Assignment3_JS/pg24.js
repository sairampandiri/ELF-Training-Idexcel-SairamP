function sumArray(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
var res=sumArray([1,2,3,4,5])
console.log(res);
