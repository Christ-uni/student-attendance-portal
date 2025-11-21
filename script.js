// Stored login credentials
const validUsername = "2412205";
const validPassword = "38716778";

function login() {
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;
    const message = document.getElementById("login-message");

    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("attendance-section").style.display = "block";
        document.getElementById("student-name").innerText = enteredUsername;
        document.getElementById("attendance-status").innerText = "Not Marked";
    } else {
        message.innerText = "Incorrect Login Details ❌";
        message.style.color = "red";
    }
}

function markAttendance() {
    document.getElementById("attendance-status").innerText = "Present ✔️";
}

function logout() {
    document.getElementById("attendance-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
    document.getElementById("login-message").innerText = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
