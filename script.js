function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Temporary demo login
    if(username === "2412205" && password === "38716778"){
        document.getElementById("message").textContent = "Login Success!";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").textContent = "Invalid login, try again.";
        document.getElementById("message").style.color = "red";
    }
}
