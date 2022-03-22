import header from "../pages/header";

const main = () => {
    const main = document.createElement("main");
    main.className = "main";
    return main;
};

const footer = () => {
    const footer = document.createElement("footer");
    footer.textContent = "Copyright ~ Vannent"
    return footer;
};

function render() {
    const content = document.getElementById("content");
    content.appendChild(header());
    content.appendChild(main());
    content.appendChild(footer());

};

  export default render;