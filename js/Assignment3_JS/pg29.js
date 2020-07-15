function missingNum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return 55 - sum;
  }
  var res=missingNum([1,2,3,4,5,7,8,9])
  console.log(res);
  