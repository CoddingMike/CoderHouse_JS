import { registerUsers } from "./users.js";
const emailLogInForm = document.getElementById("login-email");
const passLogInForm = document.getElementById("login-password");
const cleanLogInButton = document.getElementById("clean-login-form");
const sendLogInButton = document.getElementById("sent-login-form");
const logInErrorDisplay = document.getElementById("login-error-message");
const lengthUsers = registerUsers.length;


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
    if (!existEmail(emailUser)) {
        logInErrorDisplay.style.display="block";
        logInErrorDisplay.innerText = "e-mail no registrado en el sistema";
        return;
    }
    if (!existPass(passwordUser)) {
        logInErrorDisplay.style.display="block";
        logInErrorDisplay.innerText = "Contraseña incorrecta";
        passLogInForm.value="";
        return
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

function existEmail(email) {
let coincidenceMail = false;
    for (let i = 0; i < lengthUsers; i++) {
        if (registerUsers[i].email.includes(email)) {
            coincidenceMail = true;
        }
    }
    return coincidenceMail
}

function existPass(password) {
let coincidencePass = false;
    for(let i = 0; i < lengthUsers; i ++) {
        if (registerUsers[i].password.includes(password)) {
            coincidencePass = true;
        }
    }
    return coincidencePass
}

const cleanForm = () => {
    emailLogInForm.value = "";
    passLogInForm.value= "";
    logInErrorDisplay.style.display="none";
}


sendLogInButton.addEventListener("click", logInOnPage);
cleanLogInButton.addEventListener("click", cleanForm);