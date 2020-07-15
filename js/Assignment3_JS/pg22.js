function countOnes(i) {
    var r = 0;
      while( i > 0) {
      if((i%2)==1){
      r+=1;
      i=i/2;
      }
      if((i%2)==0){
      i=i/2
      }
    }
    return r;
  }
  var res=countOnes(100)
  console.log(res);
  