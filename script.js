function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "2412205" && password === "38716778") {

        localStorage.setItem("studentData", JSON.stringify({
            name: "Ananya Nallurmana Jayadevan",
            email: "ananya.jayadevan@bcomfah.christuniversity.in",
            roll: "2412205",
            class: "4BCOMF&A C",
            phone: "9606357445"
        }));

        document.getElementById("message").textContent = "Login Successful!";
        document.getElementById("message").style.color = "green";

        setTimeout(() => {
            window.location.href = "attendance.html";
        }, 900);

    } else {
        document.getElementById("message").textContent = "Invalid Login Details!";
        document.getElementById("message").style.color = "red";
    }
}

