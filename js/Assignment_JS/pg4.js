function getAbsSum(array){
    var sum = 0;
    for (var i = 0, len = array.length; i < len; i++) {
      sum += Math.abs(array[i]);
    }    
    return sum;
}
var arr=[1,2,3,4]
var res=getAbsSum(arr)
console.log("The absolute sum of the array is:",res);

