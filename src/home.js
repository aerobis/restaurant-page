import backgroundImgPath from './assets/images/background.jpg';

document.addEventListener("DOMContentLoaded", (event)=>{
    let contentContainer = document.querySelector("#content");

    let introContainer = document.createElement('div');
    introContainer.classList.add('intro-container');

    let backgroundImg = document.createElement('img');
    backgroundImg.src = backgroundImgPath;
    backgroundImg.alt = "An image of the cafe.";
    backgroundImg.classList.add('background-image');

    let introHeader = document.createElement('h1');
    introHeader.classList.add('intro-header');

    let introText = document.createElement('p');
    introText.classList.add('intro-text');

    introHeader.textContent = "Taste the Blend";
    introText.textContent = "A good brew isn't just about the coffee, its about the brewer. Experience exquisite coffee, made by the best in the craft. First one's on us.";

    introContainer.appendChild(backgroundImg);
    introContainer.appendChild(introHeader);
    introContainer.appendChild(introText);
    
    contentContainer.appendChild(introContainer);
});