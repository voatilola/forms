function validateSignUp() {
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var age = document.getElementById('age');
    var pwd1 = document.getElementById('pwd1');
    var pwd2 = document.getElementById('pwd2');
    var email = document.getElementById('email');
    var terms = document.getElementById('terms');
    var dropdown = document.getElementById('age_group');
    if(fname.value === "") {
        alert("First name is required");
        return false;
    } else if(lname.value === "") {
        alert("Last name is required");
        return false;
    } else if(Number(age.value) === 0 || Number(age.value) < 0) {
        alert("Age must be greater than zero");
        return false;
    } else if( email.value === "" && !email.value.includes("@")) {
        alert("Invalid email format");
        return false;
    } else if( pwd1.value === "" && pwd1.value.length < 6) {
        alert("Weak password");
        return false;
    } else if( pwd2.value  !== pwd1.value) {
        alert("Wrong password");
        return false;
    } else if(dropdown.selectedIndex==0){
        alert("Please answer secret question");
        return false;
    } else if(!terms.value){
        alert("Please agree to term and condition");
        return false; }
             else {
            return true;
    }
}

function validateSignIn() {
    var email1 = document.getElementById('email1');
    var pwd3 = document.getElementById('pwd3');


    if( email1.value === "" && !email1.value.includes("@")) {
        alert("Invalid email format");
        return false;
    } else if( pwd3.value === "" && pwd3.value.length < 6){
        alert("Wrong password");
        return false; 
    } else {
            return true;
    }
        
}