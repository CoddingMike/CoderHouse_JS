import { productSingleMaltWhisky } from "./products.js";
import { productBlendedWhisky } from "./products.js";
import { productBourbonWhisky } from "./products.js";
import { productIrishWhisky } from "./products.js";

const scotchWhisky = document.getElementById("scotch-whisky");
const blendedWhisky = document.getElementById("blended-whisky");
const bourbonWhisky = document.getElementById("bourbon-whisky");
const irishWhisky = document.getElementById("irish-whisky");
const productSelection = document.getElementsByClassName("product-detail");
const titleSelection = document.getElementsByClassName("item-title");
const descriptionSelect = document.getElementsByClassName("description-item");
const priceItemSelect = document.getElementsByClassName("price-item");
const titleItem = "<h4 class='item-title'></h4>";
const descriptionItem = "<p class='description-item'></p>";
const priceItem = "<p class='price-item'></p>";
const classImage = "class='image-product-style'>";
const buttonItem = "<button class='button-selection'><i class='fa-solid fa-cart-plus'></i></button>";

const scotishSelection = () => {
for (let i = 0; i < 4; i++) {
        productSelection[i].innerHTML = titleItem + descriptionItem + priceItem + "<img src='/img/NODISP.JPG'" + classImage + buttonItem;
        titleSelection[i].innerText = productSingleMaltWhisky[i].name;
        descriptionSelect[i].innerText = "Tamaño:" + productSingleMaltWhisky[i].size;
        priceItemSelect[i].innerText = "Precio: " + productSingleMaltWhisky[i].price;
    }  
}

const blendedSelection = () => {
    for (let i = 0; i < 4; i++) {
        productSelection[i].innerHTML = titleItem + descriptionItem + priceItem + "<img src='/img/NODISP.JPG'" + classImage + buttonItem;
        titleSelection[i].innerText = productBlendedWhisky[i].name;
        descriptionSelect[i].innerText = "Tamaño:" + productBlendedWhisky[i].size;
        priceItemSelect[i].innerText = "Precio: " + productBlendedWhisky[i].price;
    }  
}

const buorbonSelection = () => {
    for (let i = 0; i < 4; i++) {
        productSelection[i].innerHTML = titleItem + descriptionItem + priceItem + "<img src='/img/NODISP.JPG'" + classImage + buttonItem;
        titleSelection[i].innerText = productBourbonWhisky[i].name;
        descriptionSelect[i].innerText = "Tamaño:" + productBourbonWhisky[i].size;
        priceItemSelect[i].innerText = "Precio: " + productBourbonWhisky[i].price;
    }  
}

const irishSelection = () => {
    for (let i = 0; i < 4; i++) {
        productSelection[i].innerHTML = titleItem + descriptionItem + priceItem + "<img src='/img/NODISP.JPG'" + classImage + buttonItem;
        titleSelection[i].innerText = productIrishWhisky[i].name;
        descriptionSelect[i].innerText = "Tamaño:" + productIrishWhisky[i].size;
        priceItemSelect[i].innerText = "Precio: " + productIrishWhisky[i].price;
    }  
}

scotchWhisky.addEventListener("click", scotishSelection);
blendedWhisky.addEventListener("click", blendedSelection);
bourbonWhisky.addEventListener("click", buorbonSelection);
irishWhisky.addEventListener("click", irishSelection);
