const sendButton = document.querySelector('button');

function sendEmail(event) {
    event.preventDefault();
    const fromEmail = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const text = document.querySelector('#message').value;

    const data = { fromEmail, subject, text };
    console.log(data);

    fetch('http://localhost:8080/student/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    }).then(console.log('Server recieved our data'))
        .then(res => res.json())
        .catch(err => console.log(err));
}

sendButton.addEventListener("click", sendEmail, false);