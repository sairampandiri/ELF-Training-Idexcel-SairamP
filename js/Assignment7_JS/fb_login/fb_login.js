function validate() {
    var email1 = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    var regex = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    var regex1 = /^[6-9][0-9]{9}$/;
    var regex2 = /^[a-zA-Z0-9!@#$%^&*)(+=._-]{6,15}$/
    if (regex.test(email1)) {
        document.getElementById("la").innerHTML = "Valid Email";
        document.getElementById("la").style.visibility = "visible";
        document.getElementById("la").style.color = "rgb(8, 243, 8)";

    } else if (regex1.test(email1)) {
        document.getElementById("la").innerHTML = "Valid Email"
        document.getElementById("la").style.visibility = "visible"
        document.getElementById("la").style.color = "rgb(8, 243, 8)"
    } else {
        document.getElementById("la").innerHTML = "Invalid Email"
        document.getElementById("la").style.visibility = "visible"
        document.getElementById("la").style.color = "red"
    }

    if (regex2.test(password)) {
        document.getElementById("la1").innerHTML = "Valid pwd";
        document.getElementById("la1").style.visibility = "visible";
        document.getElementById("la1").style.color = "rgb(8, 243, 8)";
    } else {
        document.getElementById("la1").innerHTML = "Invalid pwd"
        document.getElementById("la1").style.visibility = "visible"
        document.getElementById("la1").style.color = "red"
    }

}

function validate1(){
var fname=document.getElementById("firstname").value;
var sname=document.getElementById("surname").value;
var username=document.getElementById("uname").value;
var pass=document.getElementById("paswd").value;
var gender=document.getElementsByName("gender");

var regex = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
var regex1 = /^[6-9][0-9]{9}$/;
var regex2 = /^[a-zA-Z0-9!@#$%^&*)(+=._-]{6,15}$/
var regex3=/^[a-z A-Z]{3,}$/
if (regex3.test(fname)) {
    document.getElementById("la2").innerHTML = "Valid firstname";
    document.getElementById("la2").style.visibility = "visible";
    document.getElementById("la2").style.color = "rgb(8, 243, 8)";
} else {
    document.getElementById("la2").innerHTML = "Invalid firstname"
    document.getElementById("la2").style.visibility = "visible"
    document.getElementById("la2").style.color = "red"
}


if (regex3.test(sname)) {
    document.getElementById("la3").innerHTML = "Valid surname";
    document.getElementById("la3").style.visibility = "visible";
    document.getElementById("la3").style.color = "rgb(8, 243, 8)";
} else {
    document.getElementById("la3").innerHTML = "Invalid surname"
    document.getElementById("la3").style.visibility = "visible"
    document.getElementById("la3").style.color = "red"
    document.getElementById("la3").style.marginLeft="75px"
}

if (regex.test(username)) {
    document.getElementById("la4").innerHTML = "Valid Username to login";
    document.getElementById("la4").style.visibility = "visible";
    document.getElementById("la4").style.color = "rgb(8, 243, 8)";

} else if (regex1.test(username)) {
    document.getElementById("la4").innerHTML = "Valid Username to login"
    document.getElementById("la4").style.visibility = "visible"
    document.getElementById("la4").style.color = "rgb(8, 243, 8)"
} else {
    document.getElementById("la4").innerHTML = "Invalid Username to login"
    document.getElementById("la4").style.visibility = "visible"
    document.getElementById("la4").style.color = "red"
}

if (regex2.test(pass)) {
    document.getElementById("la5").innerHTML = "Valid pwd for login";
    document.getElementById("la5").style.visibility = "visible";
    document.getElementById("la5").style.color = "rgb(8, 243, 8)";
} else {
    document.getElementById("la5").innerHTML = "Invalid pwd for login"
    document.getElementById("la5").style.visibility = "visible"
    document.getElementById("la5").style.color = "red"
}


var genValue = false;

        for(var i=0; i<gender.length;i++){
            if(gender[i].checked == true){
                document.getElementById("la7").innerHTML = "valid gender for identify"
                document.getElementById("la7").style.visibility = "visible"
                document.getElementById("la7").style.color = "rgb(8, 243, 8)"
                genValue = true;    
            }
        }
        if(!genValue){
            document.getElementById("la7").innerHTML = "Please choose the gender"
            document.getElementById("la7").style.visibility = "visible"
            document.getElementById("la7").style.color = "red"
            return false;
        }
}
