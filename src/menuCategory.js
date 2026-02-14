import {createMenuItem} from "./menuItem.js";

export function createMenuCategory(title, items){
    let category = document.createElement("div");
    category.classList.add("menu-category");

    let heading = document.createElement("h3");
    heading.classList.add("menu-category-heading");
    heading.textContent = title;
    category.appendChild(heading);

    items.forEach(item=>{
        category.appendChild(createMenuItem(item));
    });

    return category;
};

