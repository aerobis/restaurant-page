export function createMenuItem({name, image, price}){
    let item = document.createElement('div');
    item.classList.add("menu-item-card");

    let img = document.createElement('img');
    img.classList.add("menu-item-image");
    img.style.height="100px";
    img.style.width="100px";
    img.src = image;
    img.alt = name;

    let heading = document.createElement('h1');
    heading.classList.add("menu-item-heading");
    heading.textContent = name;

    let priceTag = document.createElement("p");
    priceTag.classList.add("menu-item-price");
    priceTag.textContent = price;

    item.appendChild(img);
    item.appendChild(heading);
    item.appendChild(priceTag);

    return item;
};