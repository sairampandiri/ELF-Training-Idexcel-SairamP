var formone = document.formOne
formone.addEventListener('submit', signinValidate);

function signinValidate() {
    var id = document.getElementById('email').value;
    var pwd = document.getElementById('pwd').value;
    var result = document.getElementById('la');

    var userfound = localStorage.getItem(id);
    if (userfound === null) {
        result.innerText = 'user not found'
        result.style.color = 'red';

    }
    else {
        var current = JSON.parse(userfound)
        console.log(current);
        if (current['NewPassword'] === pwd) {
            sessionStorage.setItem("current", userfound)
            formone.submit();
            return true;
        }
        else {
            result.innerText = 'invalid password'
            result.style.color = 'red';
            return false;
        }
    }

}



function validate1() {
 
    var fname = document.getElementById("firstname").value;
    var sname = document.getElementById("surname").value;
    var username = document.getElementById("uname").value;
    var pass = document.getElementById("paswd").value;
    var gender = document.getElementsByName("gender");
    var b = document.getElementById('date1').value;
    var today = new Date();  
   
    var birth = new Date(b);
    var diff=today.getFullYear() - birth.getFullYear();

    var regex = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    var regex1 = /^[6-9][0-9]{9}$/;
    var regex2 = /^[a-zA-Z0-9!@#$%^&*)(+=._-]{6,15}$/
    var regex3 = /^[a-z A-Z]{3,}$/
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
        document.getElementById("la3").style.marginLeft = "85px"

    } else {
        document.getElementById("la3").innerHTML = "Invalid surname"
        document.getElementById("la3").style.visibility = "visible"
        document.getElementById("la3").style.color = "red"
        document.getElementById("la3").style.marginLeft = "85px"

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

    if(diff >=18) {
        document.getElementById('la6').innerText = "valid date"
    
        document.getElementById('la6').style.color = "green"
    
    }
    else
    {
        document.getElementById('la6').innerHTML = "Invalid date"
    
        document.getElementById('la6').style.color = "red"
    }


    var genValue = false;

    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked == true) {
            document.getElementById("la7").innerHTML = "valid gender for identify"
            document.getElementById("la7").style.visibility = "visible"
            document.getElementById("la7").style.color = "rgb(8, 243, 8)"
            genValue = true;
        }
    }
    if (!genValue) {
        document.getElementById("la7").innerHTML = "Please choose the gender"
        document.getElementById("la7").style.visibility = "visible"
        document.getElementById("la7").style.color = "red"
        return false;
    }


}



var formtwo = document.formTwo
formtwo.addEventListener('submit', signupValidate);

var details = {};

function signupValidate() {

    var regex = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    var regex1 = /^[6-9][0-9]{9}$/;
    var regex2 = /^[a-zA-Z0-9!@#$%^&*)(+=._-]{6,15}$/
    var regex3 = /^[a-z A-Z]{3,}$/

    details.firstname = document.getElementById('firstname').value;

    details.lastname = document.getElementById('surname').value;

    details.emailId = document.getElementById('uname').value;

    details.NewPassword = document.getElementById('paswd').value;

    details.date=document.getElementById('date1').value;

    //details.gend=document.getElementsByName('gender').checked;


    if (regex3.test(details.firstname) && regex3.test(details.lastname) && regex.test(details.emailId) && regex2.test(details.NewPassword)) {

        localStorage.setItem(details.emailId, JSON.stringify(details));
    }

}