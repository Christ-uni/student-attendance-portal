// Login validation
function login() {
    const correctId = "2412205";
    const correctPassword = "38716778";

    let enteredId = document.getElementById("studentId").value;
    let enteredPassword = document.getElementById("password").value;

    if (enteredId === correctId && enteredPassword === correctPassword) {
        // Hide login and show attendance
        document.querySelector(".login-box").style.display = "none";
        document.querySelector(".attendance-box").style.display = "block";
    } else {
        alert("Incorrect Login ID or Password.");
    }
}

// Logout
function logout() {
    location.reload();
}
