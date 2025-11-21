// ---- LOGIN HANDLING ----
document.getElementById("loginBtn")?.addEventListener("click", function () {
    let id = document.getElementById("loginId").value.trim();
    let pass = document.getElementById("password").value.trim();

    if (id === "2412205" && pass === "000000") {
        // Save details
        localStorage.setItem("studentName", "Ananya Nallurmana Jayadevan");
        localStorage.setItem("studentEmail", "ananya.jayadevan@bcomfah.christuniversity.in");
        localStorage.setItem("studentRoll", "2412205");
        localStorage.setItem("studentClass", "4BCOMF&A C");
        localStorage.setItem("studentMobile", "9606357445");

        window.location.href = "attendance.html";
    } else {
        alert("Invalid Credentials");
    }
});

// ---- POPULATE STUDENT DETAILS ON ATTENDANCE PAGE ----
window.addEventListener("DOMContentLoaded", () => {
    const name = localStorage.getItem("studentName");
    const email = localStorage.getItem("studentEmail");
    const roll = localStorage.getItem("studentRoll");
    const cls = localStorage.getItem("studentClass");
    const mobile = localStorage.getItem("studentMobile");

    if (document.getElementById("pname")) {
        document.getElementById("pname").textContent = name;
        document.getElementById("pemail").textContent = email;
        document.getElementById("proll").textContent = roll;
        document.getElementById("pclass").textContent = cls;
        document.getElementById("pmobile").textContent = mobile;
    }
});

// ---- NAVIGATION DROPDOWN ----
document.querySelector(".menu-btn")?.addEventListener("click", () => {
    document.querySelector(".dropdown")?.classList.toggle("show");
});

document.getElementById("logoutBtn")?.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "index.html";
});

