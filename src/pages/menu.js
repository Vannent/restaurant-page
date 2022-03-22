function menu() {
    const menu = document.createElement("div")
    menu.className = "menu"

    const title = document.createElement("div")
    title.textContent = "Title"
    
    menu.appendChild(title); 

    return menu;
};

function loadMenu() {
    const main = document.querySelector(".main")
    main.textContent = "";
    main.appendChild(menu());
};

export default loadMenu;