function sendMail() {
    var params = {
        name: document.getElementById("name-Field").value,
        email: document.getElementById("email-Field").value,
        subject: document.getElementById("subject-Field").value,
        message: document.getElementById("message-Field").value

    };

    const serviceID = "service_eacmbyk";
    const templateID = "template_spw257b";

    emailjs.send(serviceID, templateID, params).then(
        (res) => {
            document.getElementById("name-Field").value = "";
            document.getElementById("email-Field").value = "";
            document.getElementById("subject-Field").value = "";
            document.getElementById("message-Field").value = "";
            console.log(res);
            // alert("Your message has been sent. Thank you!");
        }
    ).catch((err) => console.log(err));
}

