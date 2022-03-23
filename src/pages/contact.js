function contact() {
    const contact = document.createElement("div")
    contact.className = "contact"

    const title = document.createElement("div")
    title.className = "contact-title";
    title.textContent = "Contact Information"

    const paragraph = document.createElement("p")
    paragraph.className = "content"
    paragraph.textContent = "t vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
    
    const conTitle = document.createElement("div")
    conTitle.className = "contact-title";
    conTitle.textContent = "Leave a Message!";

    const formContent = document.createElement("div")
    formContent.className = "form-content";

    const contactForm = document.createElement("form")
    contactForm.className = "form";

        const subject = document.createElement("div");
        subject.className = "input";
        subject.innerHTML = `
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject">
        `;

        const name = document.createElement("div");
        name.className = "input";
        name.innerHTML = `
        <label for="name">Name</label>
        <input type="text" id="name" name="name">
        `;

        const email = document.createElement("div");
        email.className = "input";
        email.innerHTML = `
        <label for="email">Email</label>
        <input type="email" id="email" name="email">
        `;

        const message = document.createElement("div");
        message.className = "input";
        message.innerHTML = `
        <label for="message">Message</label>
        <input type="text" id="message" name="message">
        `;

        const submitButton = document.createElement("button")
        submitButton.className = "checkContact";
        submitButton.textContent = "Submit";

    contact.appendChild(title); 
    contact.appendChild(paragraph);
    contact.appendChild(conTitle);
    contact.appendChild(formContent);
    contact.appendChild(submitButton);

    formContent.appendChild(contactForm);

    contactForm.appendChild(subject);
    contactForm.appendChild(name);
    contactForm.appendChild(email);
    contactForm.appendChild(message);

    return contact;
};

function loadContact() {
    const main = document.querySelector(".main")
    main.textContent = "";
    main.appendChild(contact());
};

export default loadContact;