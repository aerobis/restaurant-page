import "./style.css";
import {renderHome} from "./home.js";
import {renderMenu} from "./menu.js";
import {renderAbout} from "./about.js";

document.addEventListener("DOMContentLoaded", (event)=>{
    let contentContainer = document.querySelector("#content");
    let homeBtn = document.querySelector("#home-button");
    let menuBtn = document.querySelector("#menu-button");
    let aboutBtn = document.querySelector("#about-button");

    homeBtn.addEventListener("click", ()=>{
        renderHome(contentContainer);
    });

    menuBtn.addEventListener("click", ()=>{
        renderMenu(contentContainer);
    });

    aboutBtn.addEventListener("click", ()=>{
        renderAbout(contentContainer);
    });

    renderMenu(contentContainer);

});