var ele;
function create() {
     ele=document.createElement('p')   
    ele.innerText="I am sai"

    console.log(ele);
    
}

function view(){
     document.body.appendChild(ele);
     //console.log(ele);
     
    }
function del() {
   // document.body.appendChild(ele);
   ele.style.display="none";
}
