import loadMenu from "./menu";

const header = () => {
    const header = document.createElement("header");
    const headerTitle = document.createElement("div");
    headerTitle.className = "title";
    headerTitle.textContent = "Chefane";
    header.appendChild(headerTitle);

    const buttons = document.createElement("div");
    buttons.className = "buttons";


    const homeButton = document.createElement("button");
    homeButton.className = "homeButton";
    homeButton.textContent = "Home";


    const menuButton = document.createElement("button");
    menuButton.className = "menuButton";
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
        loadMenu();
      });
    

    const contactButton = document.createElement("button");
    contactButton.className = "contactButton";
    contactButton.textContent = "Contact";
    
    buttons.appendChild(homeButton);
    buttons.appendChild(menuButton);
    buttons.appendChild(contactButton);
    header.appendChild(buttons);
    
    return header;
};

export default header;