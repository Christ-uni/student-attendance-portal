// Student stored data (can be expanded later)
const student = {
  id: "2412205",
  password: "38716778",
  name: "Ananya Nallurmana Jayadevan",
  email: "ananya.jayadevan@bcomfah.christuniversity.in",
  rollno: "2412205",
  class: "4BCOMF&A C",
  phone: "9606357445"
};

function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === student.id && password === student.password) {
    document.getElementById("message").textContent = "Login Success!";
    document.getElementById("message").style.color = "green";

    // Store login data in browser storage
    localStorage.setItem("studentData", JSON.stringify(student));

    // Redirect to profile
    setTimeout(() => {
      window.location.href = "profile.html";
    }, 1000);

  } else {
    document.getElementById("message").textContent = "Invalid login, try again.";
    document.getElementById("message").style.color = "red";
  }
}
