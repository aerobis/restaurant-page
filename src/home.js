import backgroundImgPath from './assets/images/background.jpg'; //Since you can't input this long path in line 8

export function renderHome(contentContainer){
    let introContainer = document.createElement('div');
    introContainer.classList.add('intro-container');

    let backgroundImg = document.createElement('img');
    backgroundImg.src = backgroundImgPath;
    backgroundImg.alt = "An image of the cafe.";
    backgroundImg.style.display = "block";
    backgroundImg.classList.add('background-image');

    let introText = document.createElement('div');
    introText.classList.add('intro-text');

    let introHeader = document.createElement('h1');
    introHeader.classList.add('intro-header');

    let introBody = document.createElement('p');
    introBody.classList.add('intro-body');

    introHeader.textContent = "Taste the Blend";
    introBody.textContent = "A good brew isn't just about the coffee, its about the brewer. Experience exquisite coffee, made by the best in the craft. First one's on us.";

    introText.appendChild(introHeader);
    introText.appendChild(introBody);

    introContainer.appendChild(backgroundImg);
    introContainer.appendChild(introText);
    
    contentContainer.appendChild(introContainer);
};