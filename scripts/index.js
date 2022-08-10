const emailForm = document.getElementById("email-register");
const passwordForm = document.getElementById("password-register");
const cleanButton = document.getElementById("clean-register-form");
const sendButton = document.getElementById("sent-register-form");
const errorDisplay = document.getElementById("error-message-form");
const buttonDetail = document.getElementById("detail-button");
const productSelect = document.getElementById("product-details")
const productSelection = document.getElementsByName("radio-select")

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

function itemSelection () { 
let productSelector

    productSelection.forEach(radio => {  
        if (radio.checked) {
            productSelector = radio.value;
        }
    });

    for (let i = 0; i < productLists.length; i++) {
        if (productLists[i].productCode == productSelector)
        {
            productSelect.innerHTML = "<p>" + productLists[i].name + "</p><p> Presentacion: " + productLists[i].size + "</p><p> Precio: $" + productLists[i].price + "</p>"
        }
    }
}


let productLists = [
    {
        name: "Jameson Irish Whiskey",
        size: "750cc",
        productCode: "A001",
        type: "Irish",
        price: "1500"
    },
    {
        name: "Jameson Black Barrel",
        size: "750cc",
        productCode: "A002",
        type: "Irish",
        price: "1700"
    },
    {
        name: "Jameson Caskmakes Stout Edition",
        size: "750cc",
        productCode: "A003",
        type: "Irish",
        price: "1900"
    },
    {
        name: "Jameson Caskmakes IPA Edition",
        size: "750cc",
        productCode: "A004",
        type: "Irish",
        price: "1900"
    }
]