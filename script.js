document.addEventListener("DOMContentLoaded", function () {

    const loginBtn = document.getElementById("loginBtn");
    const loginContainer = document.getElementById("loginContainer");
    const profileContainer = document.getElementById("profileContainer");
    const logoutBtn = document.getElementById("logoutBtn");

    const attendanceDropdown = document.getElementById("attendanceDropdown");
    const absenceDropdown = document.getElementById("absenceDropdown");
    const attendanceContent = document.getElementById("attendanceContent");
    const absenceContent = document.getElementById("absenceContent");

    // Sample student data
    const profile = {
        name: "Ananya Nallurmana Jayadevan",
        email: "ananya.jayadevan@bcomfah.christuniversity.in",
        mobile: "9606357445",
        rollNo: "2412205",
        course: "4BCOMF&A C",
        batch: "2024-27",
        year: "2nd Year"
    };

    function loadProfile() {
        document.getElementById("profileName").innerHTML = `<b>Name:</b> ${profile.name}`;
        document.getElementById("profileEmail").innerHTML = `<b>Email:</b> ${profile.email}`;
        document.getElementById("profileMobile").innerHTML = `<b>Mobile:</b> ${profile.mobile}`;
        document.getElementById("profileID").innerHTML = `Student ID: ${profile.studentId}`;
        document.getElementById("profileCourse").innerHTML = `Course: ${profile.course}`;
        document.getElementById("profileBatch").innerHTML = `Batch: ${profile.batch}`;
        document.getElementById("profileYear").innerHTML = `Year: ${profile.year}`;
    }

    // Login action
    loginBtn.addEventListener("click", () => {
        loginContainer.style.display = "none";
        profileContainer.style.display = "block";
        loadProfile();
        localStorage.setItem("loggedIn", "true");
    });

    // Logout Action
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        profileContainer.style.display = "none";
        loginContainer.style.display = "block";
    });

    // Auto Login
    if (localStorage.getItem("loggedIn") === "true") {
        loginContainer.style.display = "none";
        profileContainer.style.display = "block";
        loadProfile();
    }

    // Dropdown Functionality
    attendanceDropdown.addEventListener("click", () => {
        attendanceContent.style.display =
            attendanceContent.style.display === "block" ? "none" : "block";
    });

    absenceDropdown.addEventListener("click", () => {
        absenceContent.style.display =
            absenceContent.style.display === "block" ? "none" : "block";
    });

});

