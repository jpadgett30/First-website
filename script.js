
window.addEventListener("DOMContentLoaded", function () {
    let contactForm = document.querySelector("#contactForm");
    let formMessage = document.querySelector("#formMessage");

    contactForm.addEventListener("submit", function () {
        event.preventDefault();

        let name = document.querySelector("#name").value.trim();
        let email = document.querySelector("#email").value.trim();
        let emailTest = document.querySelector("#email")
        let subject = document.querySelector("#subject").value;
        let message = document.querySelector("#message").value.trim();

        if (name === "") {
            formMessage.textContent = "Please enter a name";
            formMessage.className = "errorMessage";
        }
        else if (email === "" ) {
            formMessage.textContent = "Please enter an email";
            formMessage.className = "errorMessage";
        }
        else if (!emailTest.checkValidity()) {
            formMessage.textContent = "Please enter a valid email";
            formMessage.className = "errorMessage";
        }
        else if (subject === "") {
            formMessage.textContent = "Please choose a subject";
            formMessage.className = "errorMessage";
        }
        else if (message === "" ) {
            formMessage.textContent = "Please enter a message";
            formMessage.className = "errorMessage";
        }
        else {
            formMessage.textContent = "Thank you for your message."
            formMessage.className = "successMessage"
        }
    });


    
    
})
