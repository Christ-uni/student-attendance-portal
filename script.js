/* ------------------- Utilities ------------------- */
function isLoggedIn() {
  return localStorage.getItem("loggedIn") === "true";
}
function requireLoginOrRedirect() {
  // If user not logged in and on protected page -> redirect to index.html
  const protectedPages = ["profile.html","attendance.html","absence.html"];
  const path = location.pathname.split("/").pop();
  if (protectedPages.includes(path) && !isLoggedIn()) {
    location.href = "index.html";
  }
}

/* ------------------- INITIAL RUN ON PAGE LOAD ------------------- */
document.addEventListener("DOMContentLoaded", () => {
  // protect pages if not logged in
  requireLoginOrRedirect();

  // hook menu toggle buttons (present on multiple pages)
  document.querySelectorAll(".menu-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const wrap = btn.closest(".menu-wrap");
      wrap.classList.toggle("open");
    });
  });

  // link logout anchors
  document.querySelectorAll("#logoutLink, #logoutLink2, #logoutLink3").forEach(el => {
    if (el) el.addEventListener("click", e => { e.preventDefault(); logout(); });
  });

  // If profile page, populate fields
  if (document.getElementById("profileName")) {
    populateProfileFields();
    document.getElementById("saveProfile").addEventListener("click", saveProfile);
  }

  // If login page, hook login button
  if (document.getElementById("loginBtn")) {
    document.getElementById("loginBtn").addEventListener("click", doLogin);
  }

  // also check alternative ids used in simplified pages
  if (document.getElementById("loginId") && document.getElementById("password")) {
    // when using index.html provided earlier
    document.getElementById("loginBtn")?.addEventListener("click", doLogin);
    document.getElementById("loginBtn")?.addEventListener("keydown", (e)=>{
      if(e.key === "Enter") doLogin();
    });
  }
});

/* ------------------- Default demo user (editable) -------------------
   The first time user logs in we store a default profile object into localStorage.
   The profile is editable and saved back to localStorage by the user.
-------------------------------------------------- */
const DEFAULT_USER = {
  name: "Ananya Nallurmana Jayadevan",
  email: "ananya.jayadevan@bcomfah.christuniversity.in",
  roll: "2412205",
  class: "4BCOMF&A C",
  mobile: "9606357445"
};

function ensureUserDataExists() {
  if (!localStorage.getItem("userProfile")) {
    localStorage.setItem("userProfile", JSON.stringify(DEFAULT_USER));
  }
}

/* ------------------- Login logic ------------------- */
function doLogin() {
  const idField = document.getElementById("loginId");
  const passField = document.getElementById("password");
  if (!idField || !passField) {
    // if IDs differ, look for older inputs
    const altId = document.querySelector('input[placeholder*="User Name"]');
    const altPass = document.querySelector('input[type="password"]');
    if(altId) altId.focus();
    if(altPass) altPass.focus();
    return;
  }
  const id = idField.value.trim();
  const pass = passField.value.trim();

  if (id === "" || pass === "") {
    alert("Please enter Login ID and Password");
    return;
  }

  // Demo credential check — change as needed
  // Accept either roll number (2412205) or any non-empty; password 'password' for demo.
  if (id === "2412205" && pass === "password") {
    // create user profile if not present and mark loggedIn
    ensureUserDataExists();
    localStorage.setItem("loggedIn", "true");
    location.href = "profile.html";
  } else {
    alert("Invalid Login ID or Password");
  }
}

/* ------------------- Profile handling ------------------- */
function populateProfileFields() {
  ensureUserDataExists();
  const data = JSON.parse(localStorage.getItem("userProfile"));
  // fill inputs (if present)
  const nameEl = document.getElementById("profileName");
  const emailEl = document.getElementById("profileEmail");
  const rollEl = document.getElementById("profileRoll");
  const classEl = document.getElementById("profileClass");
  const mobileEl = document.getElementById("profileMobile");

  if (nameEl) nameEl.value = data.name || "";
  if (emailEl) emailEl.value = data.email || "";
  if (rollEl) rollEl.value = data.roll || "";
  if (classEl) classEl.value = data.class || "";
  if (mobileEl) mobileEl.value = data.mobile || "";
}

function saveProfile() {
  const name = document.getElementById("profileName").value.trim();
  const email = document.getElementById("profileEmail").value.trim();
  const roll = document.getElementById("profileRoll").value.trim();
  const cls = document.getElementById("profileClass").value.trim();
  const mobile = document.getElementById("profileMobile").value.trim();

  const newProfile = { name, email, roll, class: cls, mobile };
  localStorage.setItem("userProfile", JSON.stringify(newProfile));
  alert("Profile saved");
}

/* ------------------- Navigation helpers ------------------- */
function logout() {
  localStorage.removeItem("loggedIn");
  // keep profile if you want; comment next line to keep saved profile
  // localStorage.removeItem("userProfile");
  location.href = "index.html";
}
