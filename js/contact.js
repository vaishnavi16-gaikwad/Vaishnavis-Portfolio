emailjs.init({
    publicKey: "myyC-kQcPlrIFvbU0huYt",
});

const form = document.getElementById("contact-form");
const status = document.getElementById("status-message");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_3cmr5yd",
        "template_6xarhvl",
        this
    )

    .then(function () {

        status.innerHTML = "✅ Message Sent Successfully!";
        status.style.color = "#00c853";
        form.reset();

    })

    .catch(function (error) {

        status.innerHTML = "❌ Failed to Send Message!";
        status.style.color = "red";

        console.log(error);

    });

});