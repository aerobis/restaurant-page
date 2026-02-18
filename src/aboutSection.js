export function createSection(title, contents){
    const sectionContainer = document.createElement('div');

    let wordArray = title.split(" ");
    let arrLength = wordArray.length;
    let sectionTitle = '';
    for(let i = 0; i < arrLength; i++){
        wordArray[i] = wordArray[i].toLowerCase();
    };
    sectionTitle = wordArray.join('-');
    
    sectionContainer.className = `${sectionTitle}-section`;

    const sectionHeaderContainer = document.createElement('div');
    sectionHeaderContainer.classList.add("about-section-header");
    sectionHeaderContainer.classList.add(`${sectionTitle}-section-header`);
    const sectionHeader = document.createElement('h3');
    sectionHeader.textContent = title;
    sectionHeaderContainer.appendChild(sectionHeader);

    const sectionContentContainer = document.createElement('div');
    sectionContentContainer.classList.add("about-section-content");
    sectionContentContainer.classList.add(`${sectionTitle}-section-content`);

    contents.forEach(content => {
        const p = document.createElement('p');
        p.textContent = content;
        p.classList.add(`${sectionTitle}-content-text`);
        sectionContentContainer.appendChild(p);
    });

    sectionContainer.appendChild(sectionHeaderContainer);
    sectionContainer.appendChild(sectionContentContainer);

    return sectionContainer;
};
    