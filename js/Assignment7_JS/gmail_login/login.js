function validate() {
    var email1=document.getElementById("email").value;
    var regex=/^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    var regex1=/^[6-9][0-9]{9}$/;
if (regex.test(email1)) {
    document.getElementById("la").innerHTML="Valid Email"
    document.getElementById("la").style.visibility="visible"
    document.getElementById("la").style.color="green"

}else if(regex1.test(email1)){
    document.getElementById("la").innerHTML="Valid Email"
    document.getElementById("la").style.visibility="visible"
    document.getElementById("la").style.color="green"
}
else{
    document.getElementById("la").innerHTML="Invalid Email"
    document.getElementById("la").style.visibility="visible"
    document.getElementById("la").style.color="red"
}
}