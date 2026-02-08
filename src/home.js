document.addEventListener("DOMContentLoaded", (event)=>{
    let contentContainer = document.querySelector("#content");
    let introContainer = document.createElement('div');
    let introHeader = document.createElement('h1');
    let introText = document.createElement('p');

    introHeader.textContent = "Welcome to Our Restaurant";
    introText.textContent = "Experience amazing food and ambiance. Experienced staff, professional service, and above all, priority to a happy customer.";

    introContainer.appendChild(introHeader);
    introContainer.appendChild(introText);
    
    contentContainer.appendChild(introContainer);
});