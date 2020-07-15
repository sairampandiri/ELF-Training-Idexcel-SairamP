var log;
function login(){
    log=document.createElement("form")

    var log1=document.createElement('label')
    log1.innerHTML="Username"
    log.appendChild(log1);

    var input=document.createElement('input')
    log.appendChild(input);

    var bre=document.createElement('br')
    log.appendChild(bre);

    var log2=document.createElement('label')
    log2.innerHTML="password"
    log.appendChild(log2);

     var input1=document.createElement('input')
     log.appendChild(input1);
     

     var bre1=document.createElement('br')
     log.appendChild(bre1);
     

     var submit=document.createElement('button')
     submit.innerHTML="SUBMIT";
     log.appendChild(submit);
    
  document.body.appendChild(log)
 
    

}
function del() {
   log.style.display="none";
    //log.remove();
 }