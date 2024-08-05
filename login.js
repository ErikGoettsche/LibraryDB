;import login from 'login';

document = login
const loginForm = document.getElementById("LoginForm");
const loginButton = document.getElementById("LoginForm-submit");
//will be used to add error messaging. needs some elelments added to the HTML form to support.
//const 
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        //loginErrorMsg.style.opacity = 1;
        alert("Perhaps you should double check your username and password");
    }
})