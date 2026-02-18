import {createSection} from "./aboutSection.js";

export function renderAbout(contentContainer){
    if(contentContainer.children.length > 0){
        contentContainer.innerHTML = '';
    }

    let aboutContainer = document.createElement('div');
    aboutContainer.className = "about-container";

    let aboutLegendSection = document.createElement('div');
    aboutLegendSection.className = "about-legend-section";
    let aboutLegend = document.createElement('h3');
    aboutLegend.textContent = "ABOUT US";
    aboutLegend.className = "about-legend";
    aboutLegendSection.appendChild(aboutLegend);

    let aboutContent = document.createElement('div');
    aboutContent.className = "about-content-section";

    let timings = [
        "Sunday - Thursday: 9am - 6pm",
        "Friday - Saturday: 11am - 4pm"
    ];

    let timingSection = createSection("Timings", timings);
    aboutContent.appendChild(timingSection);

    aboutContainer.appendChild(aboutLegendSection);
    aboutContainer.appendChild(aboutContent);
    contentContainer.appendChild(aboutContainer);
};