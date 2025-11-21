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

// Load profile data
if (localStorage.getItem("student") && document.getElementById("pname")) {
    let s = JSON.parse(localStorage.getItem("student"));
    document.getElementById("pname").textContent = s.name;
    document.getElementById("pemail").textContent = s.email;
    document.getElementById("proll").textContent = s.roll;
    document.getElementById("pmobile").textContent = s.mobile;
    document.getElementById("pclass").textContent = s.class;
}

// Page navigation
function navigate(page) {
    window.location.href = page;
}

function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

// close dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.closest('.dropdown')) {
        let items = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("show");
        }
    }
}
