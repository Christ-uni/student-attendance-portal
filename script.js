function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // VALID CREDENTIALS
    if (username === "2412205" && password === "38716778") {
        document.getElementById("message").textContent = "Login Success!";
        document.getElementById("message").style.color = "green";

        // Store student info
        localStorage.setItem("studentName", "Ananya Nallurmana Jayadevan");
        localStorage.setItem("rollNo", "2412205");
        localStorage.setItem("email", "ananya.jayadevan@bcomfah.christuniversity.in");
        localStorage.setItem("class", "4BCOMF&A C");
        localStorage.setItem("mobileNo", "9606357445");

        // Redirect after success
        setTimeout(() => {
            window.location.href = "attendance.html";
        }, 1000);
    } 
    else {
        document.getElementById("message").textContent = "Invalid login, try again.";
        document.getElementById("message").style.color = "red";
    }
}


// ---- Display Login Saved Data in Attendance Page ----
if (window.location.pathname.includes("attendance.html")) {
    let name = localStorage.getItem("studentName");
    let roll = localStorage.getItem("rollNo");
    let email = localStorage.getItem("email");
    let name = localStorage.getItem("class");
    let name = localStorage.getItem("mobileNo");

    // If someone opens attendance page without login → redirect
    if (!roll) window.location.href = "index.html";

    document.getElementById("studentName").textContent = name;
    document.getElementById("rollNo").textContent = roll;
    document.getElementById("email").textContent = email;
    document.getElementById("class").textContent = class;
    document.getElementById("email").textContent = mobileNo;
}


// ---- Logout ----
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}
