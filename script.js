// --------------------- USER DATA ---------------------
const userData = {
    name: "Ananya Nallurmana Jayadevan",
    email: "ananya.jayadevan@bcomfah.christuniversity.in",
    roll: "2412205",
    class: "4BCOMF&A C",
    mobile: "9606357445"
};

// --------------------- LOGIN FUNCTION ---------------------
function login() {
    const id = document.getElementById("loginId").value;
    const pass = document.getElementById("password").value;

    // Set login condition (you can change password later)
    if (id === "2412205" && pass === "38716778") {
        localStorage.setItem("student", JSON.stringify(userData));
        window.location.href = "profile.html"; // Redirect to profile first
    } else {
        alert("Invalid Login ID or Password");
    }
}

// --------------------- LOAD PROFILE DATA ---------------------
function loadProfile() {
    const student = JSON.parse(localStorage.getItem("student"));
    if (!student) return;

    document.getElementById("profileName").innerText = student.name;
    document.getElementById("profileEmail").innerText = student.email;
    document.getElementById("profileRoll").innerText = student.roll;
    document.getElementById("profileClass").innerText = student.class;
    document.getElementById("profileMobile").innerText = student.mobile;
}

// --------------------- NAVIGATION BETWEEN PAGES ---------------------
function goToProfile() {
    window.location.href = "profile.html";
}

function goToAttendance() {
    window.location.href = "attendance.html";
}

function goToAbsence() {
    window.location.href = "absence.html";
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}

