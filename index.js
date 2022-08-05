function logInOnPage() {
    
do {
    nameuser = prompt("Ingrese su email: ");
    if (!validatEmail(nameuser)) {
        alert("El nombre de usuario debe ser un correo electronico");
    }
} while (!validatEmail(nameuser));

alert("Usuario registrado exitosamente");
    
do {
    passUser = prompt("Ingrese la contraseña, la cual debe tener 8 caracteres como mínimo");
    if (!validatePass(passUser)) {
        alert("La contraseña debe tener por lo menos 8 caracteres")
    }
} while (!validatePass(passUser));

alert("Contraseña ingresada correctamente")

}
function validatEmail(email) {
    regExpresion = /\S+@\S+\.\S+/
    return regExpresion.test(email);
}

function validatePass(password) {
    const lengthMin = 8;
    return password.length >= lengthMin;
}