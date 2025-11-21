function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "student" && password === "1234") {

        const studentData = {
            name: "Ananya Nallurmana Jayadevan",
            email: "ananya.jayadevan@bcomfah.christuniversity.in",
            roll: "2412205",
            class: "4BCOMF&A C",
            phone: "9606357445"
        };

        localStorage.setItem("studentInfo", JSON.stringify(studentData));

        document.getElementById("loginMessage").innerText = "Login Successful!";
        document.getElementById("loginMessage").style.color = "lightgreen";

        setTimeout(() => {
            window.location.href = "attendance.html";
        }, 1200);

    } else {
        document.getElementById("loginMessage").innerText = "Invalid Username or Password!";
        document.getElementById("loginMessage").style.color = "red";
    }
}

window.onload = function () {
    const data = JSON.parse(localStorage.getItem("studentInfo"));

    if (data) {
        document.getElementById("studentName").innerText = data.name;
        document.getElementById("studentEmail").innerText = data.email;
        document.getElementById("studentRoll").innerText = data.roll;
        document.getElementById("studentClass").innerText = data.class;
        document.getElementById("studentPhone").innerText = data.phone;
    }
};

