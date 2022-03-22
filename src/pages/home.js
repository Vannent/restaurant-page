import loadMenu from "./menu";

const home = () => {
    const banner = document.createElement("div");
    banner.className = "banner";

    const bannerTitle = document.createElement("h1");
    bannerTitle.className = "banner-title"
    bannerTitle.textContent = "Delicious Food";

    const bannerParagraph = document.createElement("p");
    bannerParagraph.className = "banner-paragraph"
    bannerParagraph.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

    const checkMenu = document.createElement("button")
    checkMenu.className = "checkMenu";
    checkMenu.textContent = "Check our Menu!"
    checkMenu.addEventListener("click", (e) => {
        loadMenu();
      });

    banner.appendChild(bannerTitle);
    banner.appendChild(bannerParagraph);
    banner.appendChild(checkMenu);

    return banner;
};

export function loadHome() {
    const main = document.querySelector(".main")
    main.textContent = "";
    main.appendChild(home());
};
export default home;
