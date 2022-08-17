import { productList } from "./products.js";

const emailLogInForm = document.getElementById("login-email");
const passLogInForm = document.getElementById("login-password");
const cleanLogInButton = document.getElementById("clean-login-form");
const sendLogInButton = document.getElementById("sent-login-form");
const logInErrorDisplay = document.getElementById("login-error-message");
const buttonDetail = document.getElementById("display-details");
const productSelect = document.getElementById("product-details");
const productSelection = document.getElementsByName("radio-select");
const scotchWhisky = document.getElementById("scotch-whisky");
const bourbonWhisky = document.getElementById("bourbon-whisky");
const irishWhisky = document.getElementById("irish-whisky");
const ryeWhisky = document.getElementById("rye-whisky");

scotchWhisky.addEventListener("click", prueba);

function prueba() {
    alert("Tocaste Scotch");
}

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
}

function validatEmail (email) {
    regExpresion = /\S+@\S+\.\S+/
    return regExpresion.test(email);
}

function validatePass(password) {
    const lengthMin = 8;
    return password.length >= lengthMin;
}
sendLogInButton.addEventListener("click", logInOnPage);


const cleanForm = () => {
    emailLogInForm.value = "";
    passLogInForm.value= "";
    logInErrorDisplay.style.display="none";
}
cleanLogInButton.addEventListener("click", cleanForm);

const itemSelection = () => { 
let productSelector
    
    productSelection.forEach(radio => {  
        if (radio.checked) {
            productSelector = radio.value;
        }
    });
    
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].productCode == productSelector) {
            productSelect.innerHTML = "<p>" + productList[i].name + "</p><p> Presentacion: " + productList[i].size + "</p><p> Precio: $" + productList[i].price + "</p>"
        }
    }
}

buttonDetail.addEventListener("click", itemSelection)