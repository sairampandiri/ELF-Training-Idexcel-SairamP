function whichIsLarger(f, g) {
    if (f > g){
     return 'f';
    }else if (f < g) {
    return 'g';
    }else{
     return 'neither';
    }
  }
  var res=whichIsLarger(10,10)
  console.log(res);
  