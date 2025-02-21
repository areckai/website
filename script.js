// Initialize EmailJS
(function() {
    emailjs.init("n_jNPlheieMzQVPS5"); // Replace with your EmailJS user ID
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send('service_a3f7rzm', 'template_r6c8ivl', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');

            document.getElementById('contactForm').reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        });
});

