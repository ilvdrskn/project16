window.onload = function() {
    var inputEmail = document.getElementById("inputEmail");
    document.getElementsByClassName("form")[0].onsubmit = function() {
        emailVal = inputEmail.value;

        if (!validEmail(emailVal)) {
            inputEmail.classList.add("error");
            return false;
        } else {
            inputEmail.classList.remove("error");
             
        }

        return true;
    }
}

function validEmail(email) {
    var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(String(email).toLowerCase());
}