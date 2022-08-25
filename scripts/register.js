/* import { registerUsers } from "./users.js"; */
const emailLogInForm = document.getElementById("login-email");
const passLogInForm = document.getElementById("login-password");
const cleanLogInButton = document.getElementById("clean-login-form");
const sendLogInButton = document.getElementById("sent-login-form");
const logInErrorDisplay = document.getElementById("login-error-message");

const logInOnPage = () => {

let emailUser = emailLogInForm.value;
let passwordUser = passLogInForm.value;

    if (!validatEmail(emailUser)) {
        logInErrorDisplay.style.display="block";
        logInErrorDisplay.innerText = "Debe ingresar un email valido";
        emailLogInForm.value="";
        return;
    }
    if (!validatePass(passwordUser)) {
        logInErrorDisplay.style.display="block";
        logInErrorDisplay.innerText = "La contraseña debe tener mas de 8 digitos";
        passLogInForm.value="";
        return;
    }
    
    if (registerUsers.email.includes(emailUser)) {
        logInErrorDisplay.style.display="block";
        logInErrorDisplay.innerText = "Usuario no registrado";
    }
}
    
function validatEmail (email) {
    const regExpresion = /\S+@\S+\.\S+/;
    return regExpresion.test(email);
}
    
function validatePass(password) {
    const lengthMin = 8;
    return password.length >= lengthMin;
}

const cleanForm = () => {
    emailLogInForm.value = "";
    passLogInForm.value= "";
    logInErrorDisplay.style.display="none";
}


sendLogInButton.addEventListener("click", logInOnPage);
cleanLogInButton.addEventListener("click", cleanForm);