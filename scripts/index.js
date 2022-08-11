const emailLogInForm = document.getElementById("login-email");
const passLogInForm = document.getElementById("login-password");
const cleanLogInButton = document.getElementById("clean-login-form");
const sendLogInButton = document.getElementById("sent-login-form");
const logInErrorDisplay = document.getElementById("login-error-message");
const buttonDetail = document.getElementById("display-details");
const productSelect = document.getElementById("product-details");
const productSelection = document.getElementsByName("radio-select");

sendLogInButton.addEventListener("click", logInOnPage);
function logInOnPage() {

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

cleanLogInButton.addEventListener("click", cleanForm);
function cleanForm() {
    emailLogInForm.value = "";
    passLogInForm.value= "";
    logInErrorDisplay.style.display="none";
}

function itemSelection() { 
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

let productList = [
    {
        name: "Jameson Irish Whiskey",
        size: "750cc",
        productCode: "A001",
        type: "Irish",
        price: "1500",
    },
    {
        name: "Jameson Black Barrel",
        size: "750cc",
        productCode: "A002",
        type: "Irish",
        price: "1700",
    },
    {
        name: "Jameson Caskmakes Stout Edition",
        size: "750cc",
        productCode: "A003",
        type: "Irish",
        price: "1900",
    },
    {
        name: "Jameson Caskmakes IPA Edition",
        size: "750cc",
        productCode: "A004",
        type: "Irish",
        price: "1900",
    }
]

const registerUsers = [
    {
        email: "maxi_faggiani@hotmail.com",
        password: "miraLaContraseña",
        nombre: "Maximiliano",
        apellido: "Faggiani",
        direccion: "Cafferata 972"
    },
    {
        email: "pedro_rodriguez@hotmail.com",
        password: "holaSoyPedro",
        nombre: "Pedro",
        apellido: "Rodriguez",
        direccion: "Ovidio Lagos 1533"
    }
]