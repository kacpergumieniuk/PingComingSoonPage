


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



function SubmitEmail(){

let x = document.getElementById("text-input").value;

if(validateEmail(x)){
    document.getElementById("error").style.display = "none";
    document.getElementById("text-input").style.border = "1px solid rgb(218, 218, 218)";


}
else{
    document.getElementById("error").style.display = "block";
    document.getElementById("text-input").style.border = "1px solid red";
}
    

}

