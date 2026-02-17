export function renderAbout(contentContainer){
    if(contentContainer.children.length > 0){
        contentContainer.innerHTML = '';
    }

    let aboutContainer = document.createElement('div');
    aboutContainer.className = "about-container";

    let aboutHeadingSection = document.createElement('div');
    aboutHeadingSection.className = "about-heading-section";
    let aboutHeading = document.createElement('h3');
    aboutHeading.textContent = "ABOUT US";
    aboutHeading.className = "about-heading";
    aboutHeadingSection.appendChild(aboutHeading);

    let aboutContent = document.createElement('div');
    aboutContent.className = "about-content-section";

    aboutContainer.appendChild(aboutHeadingSection);
    aboutContainer.appendChild(aboutContent);
    contentContainer.appendChild(aboutContainer);
};