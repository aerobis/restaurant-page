import {createMenuCategory} from "./menuCategory.js";

import singleEspressoImg from "./assets/images/single-shot-espresso.jpg";
import doubleEspressoImg from "./assets/images/double-shot-espresso.jpg";

export function renderMenu(contentContainer){
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

    let espressoItems = [
        {name: 'Espresso', image: singleEspressoImg, price:"Rs. 150"},
        {name: 'Doppio', image: doubleEspressoImg, price:"Rs. 250"},
    ];
    
    let espressoCategory = createMenuCategory("Espresso", espressoItems);

    menuContainer.appendChild(menuLegend);
    menuContainer.appendChild(menuItemsContainer);

    menuItemsContainer.appendChild(espressoCategory);

    contentContainer.appendChild(menuContainer);
};