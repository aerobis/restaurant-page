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

    let welcome = [
        `We are a local cafe based in Abc, Def, focused on bringing the exquisite and authentic taste of pure blend coffee. We get our beans locally sourced where we can from
        the highest quality farms, and where we can't, from brands internationally recognized for delivering the best taste. Our baristas are seasoned veterans in the field
        of the Cafe, and are dedicated to elevate your coffee game further.`,
        `We even have a special game for true coffee enthusiasts, where managing to figure out the flavors from a coffee bean rewards discounts, or even hamper prizes.`,
        `Our cakes, similarly, are also made with love from authentic dairy, and with baking so gentle it'll remind even the fondest of their first dessert.`,
        `Join us for an evening. Or a morning. Your call.`,
    ];

    let timings = [
        "Sunday - Thursday: 9am - 6pm",
        "Friday - Saturday: 11am - 4pm"
    ];

    let location = [
        `We are located at Abc, Def.`,
    ];

    let welcomeSection = createSection("Welcome", welcome);
    aboutContent.appendChild(welcomeSection);

    let timingSection = createSection("Timing", timings);
    aboutContent.appendChild(timingSection);

    let locationSection = createSection("Visit Us", location);
    aboutContent.appendChild(locationSection);

    aboutContainer.appendChild(aboutLegendSection);
    aboutContainer.appendChild(aboutContent);
    contentContainer.appendChild(aboutContainer);
};