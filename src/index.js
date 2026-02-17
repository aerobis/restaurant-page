import "./style.css";
import {renderHome} from "./home.js";
import {renderMenu} from "./menu.js";

document.addEventListener("DOMContentLoaded", (event)=>{
    let contentContainer = document.querySelector("#content");
    let homeBtn = document.querySelector("#home-button");
    let menuBtn = document.querySelector("#menu-button");

    homeBtn.addEventListener("click", ()=>{
        renderHome(contentContainer);
    });

    menuBtn.addEventListener("click", ()=>{
        renderMenu(contentContainer);
    });

    renderMenu(contentContainer);

});