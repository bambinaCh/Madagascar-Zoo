
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//FORM
////
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var description = document.getElementById('description').value;

    // Perform form validation
    if (name === '' || lastname === '' || email === '' || subject === '' || description === '') {
        alert('Bitte füllen Sie alle Felder aus.');
        return;
    }

    var thankYouMessage = 'Danke für Ihre Anfrage. Es wird ASAP bearbeitet.';
    // Replace the following line with your preferred way of displaying the message to the user
    alert(thankYouMessage);

    // Reset form fields
    document.getElementById('contactForm').reset();
});









