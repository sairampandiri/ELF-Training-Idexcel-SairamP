function addUpto(num) {
    var sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
 var res=addUpto(4) ;
 console.log("sum of the number:",res);
 