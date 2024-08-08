
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Simple form validation
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Form submitted successfully!");
    }
});
