const form = document.getElementById("studentForm");
const message = document.getElementById("message");

const scriptURL = "https://script.google.com/macros/s/AKfycbw3Dzg42jbf8xk7hLJ7pa52ZYVhNJMxK3AlvGMAGyk2awgyltSpf13LgYdoR4_AN1vh/exec";

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        rollNo: document.getElementById("rollNo").value,
        className: document.getElementById("className").value,
        hobbies: document.getElementById("hobbies").value
    };

    message.innerText = "Submitting...";
    message.style.color = "blue";

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {

        if (data.status === "success") {
            message.innerText = "Data submitted successfully!";
            message.style.color = "green";

            form.reset();
        } else {
            message.innerText = "Something went wrong.";
            message.style.color = "red";
        }

    })
    .catch(error => {

        console.error(error);

        message.innerText = "Error submitting data.";
        message.style.color = "red";

    });

});