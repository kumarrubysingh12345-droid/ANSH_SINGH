
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("result").textContent =
        "Thank you! Message submitted successfully.";

    form.reset();
});
