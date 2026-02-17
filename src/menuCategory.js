import {createMenuItem} from "./menuItem.js";

export function createMenuCategory(title, items){
    let category = document.createElement("div");
    category.classList.add("menu-category");
    
    let wordArray = title.split(" ");
    let arrLength = wordArray.length;
    let classTitle = '';
    for(let i = 0; i < arrLength; i++){
        wordArray[i] = wordArray[i].toLowerCase();
    };
    classTitle = wordArray.join('-');
    console.log(classTitle);
    
    category.classList.add(`${classTitle}-category`);

    let heading = document.createElement("h3");
    heading.classList.add("menu-category-header");
    heading.textContent = title;
    category.appendChild(heading);

    let categoryItems = document.createElement("div");
    categoryItems.classList.add("menu-category-items");
    category.appendChild(categoryItems);

    items.forEach(item=>{
        categoryItems.appendChild(createMenuItem(item));
    });

    category.appendChild(categoryItems);
    
    return category;
};

