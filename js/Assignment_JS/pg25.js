function makeTitle(str) {
    str = str.split(" ");
    
    for (i = 0; i < str.length; i++) {
          str[i] = str[i].substring(0,1).toUpperCase() + str[i].substring(1); 
    }
    
    return str.join(" ");
  }
var res=makeTitle(" i love my country ")
console.log(res);
