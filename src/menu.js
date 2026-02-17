import {createMenuCategory} from "./menuCategory.js";

import singleEspressoImg from "./assets/images/single-shot-espresso.jpg";
import doubleEspressoImg from "./assets/images/double-shot-espresso.jpg";
import americanoImg from "./assets/images/americano.jpg"

import cappuccinoImg from "./assets/images/cappuccino.jpg";
import latteImg from "./assets/images/latte.jpg";
import caramelLatteImg from "./assets/images/caramel-latte.jpg";
import mochaImg from "./assets/images/mocha.jpg"

import cheesecakeImg from "./assets/images/cheesecake.jpg";
import tiramisuImg from "./assets/images/tiramisu.jpg";
import chocolateCakeImg from "./assets/images/chocolate-cake.jpg";

export function renderMenu(contentContainer){
    if(contentContainer.children.length > 0){
        contentContainer.innerHTML = '';
    };

    let menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    let menuLegend = document.createElement("div");
    menuLegend.classList.add("menu-legend");

    let menuLegendText = document.createElement('h1');
    menuLegendText.textContent = "OUR MENU";
    menuLegendText.classList.add("menu-legend-text");

    menuLegend.appendChild(menuLegendText);

    let menuItemsContainer = document.createElement("div");
    menuItemsContainer.classList.add("menu-items-container");

    let classicItems = [
        {name: 'Espresso', image: singleEspressoImg, price:"Rs. 150"},
        {name: 'Doppio', image: doubleEspressoImg, price:"Rs. 250"},
        {name: 'Americano', image: americanoImg, price:"Rs. 215"},
    ];

    let milkItems = [
        {name: 'Cappuccino', image: cappuccinoImg, price: 'Rs. 260'},
        {name: 'Cafe Latte', image: latteImg, price: 'Rs. 265'},
        {name: 'Caramel Latte', image: caramelLatteImg, price: 'Rs. 285'},
        {name: 'Mocha', image: mochaImg, price: 'Rs. 295'},
    ];

    let cakeItems = [
        {name: "Cheesecake", image: cheesecakeImg, price:"Rs 260"},
        {name: "Tiramisu", image: tiramisuImg, price:"Rs. 160"},
        {name: "Chocolate Cake", image: chocolateCakeImg, price:"Rs. 125"},
    ];
    
    let espressoCategory = createMenuCategory("Classics", classicItems);
    let milkCategory = createMenuCategory("Milk Items", milkItems);
    let cakeCategory = createMenuCategory("Dessert", cakeItems);

    menuContainer.appendChild(menuLegend);
    menuContainer.appendChild(menuItemsContainer);

    menuItemsContainer.appendChild(espressoCategory);
    menuItemsContainer.appendChild(milkCategory);
    menuItemsContainer.appendChild(cakeCategory);

    contentContainer.appendChild(menuContainer);
};