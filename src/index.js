import "./style.css";
import {renderHome} from "./home.js";
import {renderMenu} from "./menu.js";

let contentContainer = document.querySelector("#content");
renderMenu(contentContainer); //Open home page by default

document.getElementById("#home-button").addEventListener("click", ()=>{
    renderHome(contentContainer);
})

document.getElementById("#menu-button").addEventListener("click", ()=>{
    renderMenu(contentContainer);
});
