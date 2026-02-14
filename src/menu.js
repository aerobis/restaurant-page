import {createMenuCategory} from "./menuCategory.js";

export function renderMenu(){
    let menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    let menuLegend = document.createElement("div");
    menuLegend.classList.add("menu-legend");

    let menuItemsContainer = document.createElement("div");
    menuItemsContainer.classList.add("menu-items-container");

    menuContainer.appendChild(menuLegend);
    menuContainer.appendChild(menuItemsContainer);

    
};