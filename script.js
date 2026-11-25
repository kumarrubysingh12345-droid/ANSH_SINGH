
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = form.querySelector(
        'input[type="text"]'
    ).value;

    document.getElementById("result").textContent =
        "Thank you " + name + "! Your message was submitted.";

    form.reset();

});
