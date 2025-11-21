// User stored data
const student = {
    username: "2412205",
    password: "38716778",
    name: "Ananya Nallurmana Jayadevan",
    email: "ananya.jayadevan@bcomfah.christuniversity.in",
    roll: "2412205",
    mobile: "9606357445",
    class: "4BCOMF&A C"
};

// Login function
function login() {
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;

    if (u === student.username && p === student.password) {
        localStorage.setItem("student", JSON.stringify(student));
        window.location.href = "profile.html";
    } else {
        alert("Invalid Login");
    }
}

// Load profile data if on profile page
if (localStorage.getItem("student") && document.getElementById("pname")) {
    let s = JSON.parse(localStorage.getItem("student"));
    document.getElementById("pname").textContent = s.name;
    document.getElementById("pemail").textContent = s.email;
    document.getElementById("proll").textContent = s.roll;
    document.getElementById("pmobile").textContent = s.mobile;
    document.getElementById("pclass").textContent = s.class;
}

// Dropdown toggle for all pages
function toggleMenu() {
    let menu = document.querySelector(".dropdown-content");
    menu.classList.toggle("show");
}

// Close dropdown if clicking outside
window.onclick = function(event) {
    if (!event.target.closest('.dropdown')) {
        let menus = document.getElementsByClassName("dropdown-content");
        for (let menu of menus) {
            menu.classList.remove("show");
        }
    }
};

// ---------------- MARKS PAGE LOGIC ----------------

// Function to load marks table on selection
function showMarks() {

    let selected = document.getElementById("semSelect");
    if (!selected) return; // Prevents errors if script runs on other pages

    let value = selected.value;

    // hide all semester blocks
    document.querySelectorAll(".semBox").forEach(box => box.style.display = "none");

    // show only selected semester block
    if (value) {
        document.getElementById(value).style.display = "block";
    }
}

// Auto hide all tables initially when page loads
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".semBox").forEach(box => box.style.display = "none");
});
