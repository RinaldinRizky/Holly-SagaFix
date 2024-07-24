const form = document.querySelector('.form form'),
submitbtn = form.querySelector('.submit-button'),
errortext = form.querySelector('.error-text');

form.onsubmit = (e) => {
    e.preventDefault();
}

submitbtn.onclick = () => {
    // start ajax
    let xhr = new XMLHttpRequest(); // create xml object
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.responseText;
                if (data === "hello world") {
                    location.href = "verify.php";
                } else {
                    errortext.textContent = data;
                    errortext.style.display = "block";
                }
            }
        }
    }
    // send data through ajax to php
    let formData = new FormData(form); // creating new object from form data
    xhr.send(formData); // sending data to php
}
