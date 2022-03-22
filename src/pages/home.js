const home = () => {
    const banner = document.createElement("div");
    banner.className = "banner";

    return banner;
};

export function loadHome() {
    const main = document.querySelector(".main")
    main.textContent = "";
    main.appendChild(home());
};
export default home;
