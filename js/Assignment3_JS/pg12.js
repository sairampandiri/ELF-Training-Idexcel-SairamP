function arrayOfMultiples (num, length) {
    var result = [];
    var k=0
    for (let i = 1; i <= length; i++) {
       result[k]=num*i
        k++;
    }
    return result
}
var res=arrayOfMultiples(7,5)
console.log(res);
