import { productSingleMaltWhisky } from "./products.js";
import { productBlendedWhisky } from "./products.js";
import { productBourbonWhisky } from "./products.js";
import { productIrishWhisky } from "./products.js";

const scotchWhisky = document.getElementById("scotch-whisky");
const blendedWhisky = document.getElementById("blended-whisky");
const bourbonWhisky = document.getElementById("bourbon-whisky");
const irishWhisky = document.getElementById("irish-whisky");
const productDisplay = document.getElementById("product-display-Id");
let producType = "";

const scotishSelection = () => {
    producType = productSingleMaltWhisky;
    if (productDisplay.hasChildNodes()) {
        cleaNodes(productDisplay);
    }
    productDisplayFunction()
}

const blendedSelection = () => {
    producType = productBlendedWhisky;
    if (productDisplay.hasChildNodes()) {
        cleaNodes(productDisplay);
    }
    productDisplayFunction()
}

const buorbonSelection = () => {
    producType = productBourbonWhisky;
    if (productDisplay.hasChildNodes()) {
        cleaNodes(productDisplay);
    }
    productDisplayFunction()
}

const irishSelection = () => {
    producType = productIrishWhisky;
    if (productDisplay.hasChildNodes()) {
        cleaNodes(productDisplay);
    }
    productDisplayFunction()
}

const cleaNodes = (list) => {
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}

const productDisplayFunction = () => {
    producType.map((products) => {
        const { name, size, image, price, productCode } = products;

        const display = document.createElement("div");
        display.className = "product-detail";

        display.innerHTML = `
            <h4 class="item-title">${name} </h4>
            <img src=${image} class="image-product-style">  
            <p class="description-item">${size}</p>
            <p class="price-item">${price}</p>
            <button class="button-selection" id="${productCode}"
                '<i class="fa-solid fa-cart-plus"></i>' 
            </button>
        `;

        productDisplay.append(display);
    });
}

scotchWhisky.addEventListener("click", scotishSelection);
blendedWhisky.addEventListener("click", blendedSelection);
bourbonWhisky.addEventListener("click", buorbonSelection);
irishWhisky.addEventListener("click", irishSelection);
