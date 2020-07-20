var username=document.getElementById('header');
var fn=document.getElementById('para1');
var ln=document.getElementById('para2');
var email=document.getElementById('para3');
var dob=document.getElementById('para4');
var lgn=document.getElementById('btn');
var current=sessionStorage.getItem('current');
if (current===null)
{
    username.innerText='invalid credentials please login again...!' 
    username.style.color='red';   
    lgn.innerText='Login Here';
}
else 
{

    var userdata=JSON.parse(current);
    username.innerText="You logged successfully with : "+userdata.emailId
    fn.innerText="First Name : "+userdata.firstname;
    ln.innerText="last Name : "+userdata.lastname;
    email.innerText="EmailId : "+userdata.emailId
    dob.innerText="Date Of Birth : "+userdata.date;
  
}

 
function removecurrent()
{
    sessionStorage.removeItem('current');
    location.replace("/Fb.html");
}
