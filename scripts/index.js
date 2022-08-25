import { productIrishWhisky } from "./products.js";
const scotchWhisky = document.getElementById("scotch-whisky");
const bourbonWhisky = document.getElementById("bourbon-whisky");
const irishWhisky = document.getElementById("irish-whisky");
const ryeWhisky = document.getElementById("rye-whisky");
const productSelection = document.getElementsByClassName("product-detail");
const titleItem = "<h4 class='item-title'</h4>";
const classImage = "class='image-product-style'>";
const buttonItem = "<button class='button-selection'><i class='fa-solid fa-cart-plus'></i></button>";

const scotishSelection = () => {

for (let i = 0; i < 4; i++) {
        productSelection[i].innerHTML = titleItem + "<img src='/img/NODISP.JPG'" + classImage + buttonItem;
    }  
}

const buorbonSelection = () => {
    for (let i = 0; i < 4; i++) {
        productSelection[i].innerHTML = "<h4></h4><img src='/img/NODISP.JPG'" + classImage + buttonItem;
    }
}

const irishSelection = () => {
    for (let i = 0; i < 4; i++) {
        productSelection[i].innerHTML = "<h4></h4><img src='/img/NODISP.JPG'" + classImage + buttonItem;
    }
}

const ryeSelection = () => {
    for (let i = 0; i < 4; i++) {
        productSelection[i].innerHTML = "<h4></h4><img src='/img/NODISP.JPG'" + classImage + buttonItem;
    }
}

scotchWhisky.addEventListener("click", scotishSelection);
bourbonWhisky.addEventListener("click", buorbonSelection);
irishWhisky.addEventListener("click", irishSelection);
ryeWhisky.addEventListener("click", ryeSelection);