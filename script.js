function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "2412205" && password === "38716778") {

        // Save student info
        localStorage.setItem("studentName", "Ananya Nallurmana Jayadevan");
        localStorage.setItem("rollNo", "2412205");
        localStorage.setItem("email", "ananya.jayadevan@bcomfah.christuniversity.in");
        localStorage.setItem("phone", "9606357445");
        localStorage.setItem("class", "4BCOMF&A C");

        window.location.href = "profile.html";
    } else {
        document.getElementById("message").textContent = "Invalid Login!";
        document.getElementById("message").style.color = "red";
    }
}

// Load stored values on pages
window.onload = function() {
    if (localStorage.getItem("rollNo")) {
        document.getElementById("studentName")?.textContent = localStorage.getItem("studentName");
        document.getElementById("rollNo")?.textContent = localStorage.getItem("rollNo");
        document.getElementById("email")?.textContent = localStorage.getItem("email");
        document.getElementById("phone")?.textContent = localStorage.getItem("phone");
        document.getElementById("class")?.textContent = localStorage.getItem("class");
    }
};

// Logout
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}

