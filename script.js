emailjs.init("n_jNPlheieMzQVPS5");

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs.send("service_a3f7rzm", "template_r6c8ivl", {
        name: name,
        email: email,
        message: message
    })
    .then(function(response) {
        alert("Message sent successfully! Response: " + response.text);
        document.getElementById("contactForm").reset();
    }, function(error) {
        alert("Failed to send message. Error: " + error.text);
    });
});
