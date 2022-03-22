import loadContact from "./contact";
import loadMenu from "./menu";

const home = () => {
    const content = document.createElement("div")
    content.className = "content"

        const banner = document.createElement("div");
        banner.className = "banner";

        const bannerTitle = document.createElement("h1");
        bannerTitle.className = "banner-title"
        bannerTitle.textContent = "Delicious Food";

        const bannerParagraph = document.createElement("p");
        bannerParagraph.className = "banner-paragraph"
        bannerParagraph.textContent = "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."

        const checkMenu = document.createElement("button")
        checkMenu.className = "checkMenu";
        checkMenu.textContent = "Check our Menu!";
        checkMenu.addEventListener("click", (e) => {
            loadMenu();
        });

        
        const missionSt = document.createElement("div")
        missionSt.className = "mission-st"

        const missionTitle = document.createElement("h1");
        missionTitle.className = "contact-title"
        missionTitle.textContent = "Mission Statement";

        const missionParagraph = document.createElement("p");
        missionParagraph.className = "banner-paragraph"
        missionParagraph.textContent = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."

        const contact = document.createElement("div")
        contact.className = "contact-st"
    
        const contactTitle = document.createElement("h1");
        contactTitle.className = "contact-title"
        contactTitle.textContent = "Contact Information";
    
        const contactParagraph = document.createElement("p");
        contactParagraph.className = "banner-paragraph"
        contactParagraph.textContent = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."

        const checkContact = document.createElement("button")
        checkContact.className = "checkContact";
        checkContact.textContent = "Contact Us!";
        checkContact.addEventListener("click", (e) => {
            loadContact();
        });
    

    content.appendChild(banner)
    content.appendChild(missionSt)
    content.appendChild(contact)
    banner.appendChild(bannerTitle);
    banner.appendChild(bannerParagraph);
    banner.appendChild(checkMenu);
    missionSt.appendChild(missionTitle);
    missionSt.appendChild(missionParagraph);
    contact.appendChild(contactTitle);
    contact.appendChild(contactParagraph);
    contact.appendChild(checkContact);

    
    return content;
};

export function loadHome() {
    const main = document.querySelector(".main")
    main.textContent = "";
    main.appendChild(home());
};
export default home;
