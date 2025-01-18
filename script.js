
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;


    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert(`Thank you, ${name}! Your email ${email} has been submitted.`);

    document.getElementById("contactForm").reset();
});
