let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error = document.getElementById("error");

function validate() {
    if(email.value=="" || pwd.value=="")
    {
        alert("Fields cannot be empty");
        return false;
    }
    /*
        let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
        if(regexp.test(email.value))
        {
        error.innerHTML="valid";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="Invalid email";
        error.style.color="red";
        return false;
    }
}*/
    else{
    
        return true;
    }
}