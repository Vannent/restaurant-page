function contact() {
    const contact = document.createElement("div")
    contact.className = "contact"

    const title = document.createElement("div")
    title.textContent = "Contact Information"
    
    contact.appendChild(title); 

    return contact;
};

function loadContact() {
    const main = document.querySelector(".main")
    main.textContent = "";
    main.appendChild(contact());
};

export default loadContact;