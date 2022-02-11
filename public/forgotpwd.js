const sendButton = document.querySelector('button');
const forgotMessage = document.querySelector('#sentpwdmsg');

function sendPassword(event) {
    event.preventDefault();
    const fromEmail = document.querySelector('#email').value;
    const subject = "The Robotics Hut - Check your password";

    //This is will be sent in the backend...
    const text = "Hello there! This is your forgotten password...";

    const data = { fromEmail, subject, text };
    console.log(data);

    fetch('http://localhost:8080/forgot', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    }).then(console.log('Server recieved our data'))
        .then(res => res.json())
        .catch(err => console.log(err));

    //Displays confirmation message of the email sent with the password...
    displayMessage(event);
}


function displayMessage(event) {
    event.preventDefault();
    console.log("Password has been sent successfully!");
    forgotMessage.innerHTML = "<small>Password has been sent successfully!<small>";
}

sendButton.addEventListener("click", sendPassword, false);