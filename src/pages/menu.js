import burgerImage from "../img/burger.png";
import hotdogImage from "../img/hotdog.png";
import pastaImage from "../img/pasta.png";
import pizzaImage from "../img/pizza.png";
import steakImage from "../img/steak.png";
import turkeyImage from "../img/turkey.png";


function menu() {
    const menu = document.createElement("div");
    menu.className = "menu";

    const title = document.createElement("h1"); 
    title.className = "menu-title";  
    title.textContent = "Our Popular Dishes";

    const popularDishes = document.createElement("div");
    popularDishes.className = "popular-dishes";

        const burgerPopDish = document.createElement("div");
        burgerPopDish.innerHTML = `<svg style="width:100px;height:100px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M22 13C22 14.11 21.11 15 20 15H4C2.9 15 2 14.11 2 13S2.9 11 4 11H13L15.5 13L18 11H20C21.11 11 22 11.9 22 13M12 3C3 3 3 9 3 9H21C21 9 21 3 12 3M3 18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V17H3V18Z" />
    </svg>`;
        const pastaPopDish = document.createElement("div");
        pastaPopDish.innerHTML = `<svg style="width:100px;height:100px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M4 16.5V8H3V7H4V6H3V5H4V4H3V3H9C9.5 3.03 9.95 3.24 10.34 3.63S10.95 4.5 11 5H21V6H11C10.95 6.53 10.73 7 10.34 7.43S9.5 8.05 9 8H7V15.05C7.05 15.05 7.13 15.04 7.24 15S7.44 15 7.5 15C8.06 15 8.7 15.14 9.42 15.42C9.83 14.5 10.53 13.68 11.53 13S13.53 12 14.53 12C16.06 12 17.36 12.53 18.42 13.59S20 15.95 20 17.5C20 17.55 20 17.64 20 17.77S19.97 17.97 19.97 18H3.14C3.27 17.5 3.55 17 4 16.5M6 15.23V8H5V15.7C5.5 15.45 5.81 15.3 6 15.23M9 7V6H7V7H9M9 4H7V5H9V4M5 4V5H6V4H5M5 6V7H6V6H5M2 19H22L20 21H4L2 19Z" />
    </svg>`;
        const pizzaPopDish = document.createElement("div");
        pizzaPopDish.innerHTML = `<svg style="width:100px;height:100px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,15A2,2 0 0,1 10,13C10,11.89 10.9,11 12,11A2,2 0 0,1 14,13A2,2 0 0,1 12,15M7,7C7,5.89 7.89,5 9,5A2,2 0 0,1 11,7A2,2 0 0,1 9,9C7.89,9 7,8.1 7,7M12,2C8.43,2 5.23,3.54 3,6L12,22L21,6C18.78,3.54 15.57,2 12,2Z" />
    </svg>`;

    const menuTitle = document.createElement("h1");
    menuTitle.className = "menuTitle-title";
    menuTitle.textContent = "Our Menu";

    const menuContent = document.createElement("div")
    menuContent.className = "menu-content";

        const menuContentTitle = document.createElement("h1");
        menuContentTitle.className = "menuContent-title";
        menuContentTitle.textContent = "Our Menu";

        const leftColumn = document.createElement("div")
        leftColumn.className = "left-column";

        const rightColumn = document.createElement("div")
        rightColumn.className = "right-column";

        const hotdog = document.createElement("div")
        hotdog.className = "food-items";
        const hotdogIcon = document.createElement("img");
        hotdogIcon.src = hotdogImage;
        const hotdogText = document.createElement("div");
        hotdogText.className = "menuContent-text";
        hotdogText.textContent = "Sauerkraut Hot Dog";
        const hotdogContent = document.createElement("p");
        hotdogContent.textContent = "Hot dog topped with sauerkraut.";
        const hotdogPrice = document.createElement("div");
        hotdogPrice.className = "menuContent-Price";
        hotdogPrice.textContent = "$7.99";

        const pasta = document.createElement("div")
        pasta.className = "food-items";
        const pastaIcon = document.createElement("img");
        pastaIcon.src = pastaImage;
        const pastaText = document.createElement("div");
        pastaText.className = "menuContent-text";
        pastaText.textContent = "Aglio e Olio";
        const pastaContent = document.createElement("p");
        pastaContent.textContent = "Spaghetti pasta with garlic and olive oil.";
        const pastaPrice = document.createElement("div");
        pastaPrice.className = "menuContent-Price";
        pastaPrice.textContent = "$14.99";

        const steak = document.createElement("div")
        steak.className = "food-items";
        const steakIcon = document.createElement("img");
        steakIcon.src = steakImage;
        const steakText = document.createElement("div");
        steakText.className = "menuContent-text";
        steakText.textContent = "Ribeye";
        const steakContent = document.createElement("p");
        steakContent.textContent = "Marbled, juicy and savory ribeye.";
        const steakPrice = document.createElement("div");
        steakPrice.className = "menuContent-Price";
        steakPrice.textContent = "$25.99";

        const burger = document.createElement("div")
        burger.className = "food-items";
        const burgerIcon = document.createElement("img");
        burgerIcon.src = burgerImage;
        const burgerText = document.createElement("div");
        burgerText.className = "menuContent-text";
        burgerText.textContent = "Avocado Burger";
        const burgerContent = document.createElement("p");
        burgerContent.textContent = "Burger topped with freshly sliced avocado.";
        const burgerPrice = document.createElement("div");
        burgerPrice.className = "menuContent-Price";
        burgerPrice.textContent = "$10.99";

        const turkey = document.createElement("div")
        turkey.className = "food-items";
        const turkeyIcon = document.createElement("img");
        turkeyIcon.src = turkeyImage;
        const turkeyText = document.createElement("div");
        turkeyText.className = "menuContent-text";
        turkeyText.textContent = "Marmalade Turkey";
        const turkeyContent = document.createElement("p");
        turkeyContent.textContent = "Sweet turkey glazed with marmalade.";
        const turkeyPrice = document.createElement("div");
        turkeyPrice.className = "menuContent-Price";
        turkeyPrice.textContent = "$20.99";

        const pizza = document.createElement("div")
        pizza.className = "food-items";
        const pizzaIcon = document.createElement("img");
        pizzaIcon.src = pizzaImage;
        const pizzaText = document.createElement("div");
        pizzaText.className = "menuContent-text";
        pizzaText.textContent = "Margherita Pizza";
        const pizzaContent = document.createElement("p");
        pizzaContent.textContent = "Pesto sauce with fresh roma tomatoes.";
        const pizzaPrice = document.createElement("div");
        pizzaPrice.className = "menuContent-Price";
        pizzaPrice.textContent = "$15.99";

    const orderButton = document.createElement("button")
    orderButton.className = "checkContact";
    orderButton.textContent = "Order!";
    
    menu.appendChild(title); 
    menu.appendChild(popularDishes);
    menu.appendChild(menuContentTitle);
    menu.appendChild(menuContent);
    menu.appendChild(orderButton);

    popularDishes.appendChild(burgerPopDish);
    popularDishes.appendChild(pastaPopDish);
    popularDishes.appendChild(pizzaPopDish);

    menuContent.appendChild(leftColumn);
    menuContent.appendChild(rightColumn);

    leftColumn.appendChild(hotdog);
    leftColumn.appendChild(burger);
    leftColumn.appendChild(pizza);

    rightColumn.appendChild(steak);
    rightColumn.appendChild(turkey);
    rightColumn.appendChild(pasta);


    hotdog.appendChild(hotdogIcon);
    hotdog.appendChild(hotdogText);
    hotdogText.appendChild(hotdogContent);
    hotdog.appendChild(hotdogPrice);

    pizza.appendChild(pizzaIcon);
    pizza.appendChild(pizzaText);
    pizzaText.appendChild(pizzaContent);
    pizza.appendChild(pizzaPrice);

    steak.appendChild(steakIcon);
    steak.appendChild(steakText);
    steakText.appendChild(steakContent);
    steak.appendChild(steakPrice);

    pasta.appendChild(pastaIcon);
    pasta.appendChild(pastaText);
    pastaText.appendChild(pastaContent);
    pasta.appendChild(pastaPrice);

    turkey.appendChild(turkeyIcon);
    turkey.appendChild(turkeyText);
    turkeyText.appendChild(turkeyContent);
    turkey.appendChild(turkeyPrice);

    burger.appendChild(burgerIcon);
    burger.appendChild(burgerText);
    burgerText.appendChild(burgerContent);
    burger.appendChild(burgerPrice);

    return menu;
};

function loadMenu() {
    const main = document.querySelector(".main")
    main.textContent = "";
    main.appendChild(menu());
};

export default loadMenu;