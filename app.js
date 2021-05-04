import axios from 'axios'

const form = {
    username: document.getElementById('username'),
    password: document.getElementById('password'),
    loginButton: document.getElementById('login_button'),
    errorMessage: document.getElementById("error_message"),
}

form.loginButton.addEventListener('click', () => {
    axios.request({
        url: "https://reqres.in/api/login",
        method: "POST",
        data: {
            username: form.username.value,
            password: form.username.value
        },
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        console.log(response);
        cookies.set("loginToken", response.data.token);
        location.href = "home.html";
    }).catch((error) => {
        console.log(error);
        errorMessage.innerText = "Invalid Login!";
    });
})