const emailForm = document.getElementById("email-register");
const passwordForm = document.getElementById("password-register");
const cleanButton = document.getElementById("clean-register-form");
const sendButton = document.getElementById("sent-register-form");
const errorDisplay = document.getElementById("error-message-form");
const productDescription = document.getElementById("product-description");
const productName = document.getElementById("product-name");
const productVariety = document.getElementById("product-variety");
const productCategory = document.getElementById("product-category");
const productSize = document.getElementById("product-size");

function logInOnPage() {

let emailUser = emailForm.value;
let passwordUser = passwordForm.value;

    if (!validatEmail(emailUser)) {
        errorDisplay.style.display="block";
        emailForm.value="";
        return;
    }
    if (!validatePass(passwordUser)) {
        errorDisplay.style.display="block";
        passwordForm.value="";
        return;
    }
}

function cleanForm() {
    emailForm.value = "";
    passwordForm.value="";
    errorDisplay.style.display="none";
}

function validatEmail(email) {
    regExpresion = /\S+@\S+\.\S+/
    return regExpresion.test(email);
}

function validatePass(password) {
    const lengthMin = 8;
    return password.length >= lengthMin;
}

function showDetails() {
    productName.innerText = "Producto:  " + productLists[0].name;
    productVariety.innerText = "Variedad: " + productLists[0].type;
    productCategory.innerText = "Categoria: " + productLists[0].category;
    productSize.innerText = "Presentacion: " + productLists[0].size;
}


let productLists = [
    {
        name: "Jameson Black Barrel",
        size: "750cc",
        category: "Whisky",
        type: "Irish",
    },
]