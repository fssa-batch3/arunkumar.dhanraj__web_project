// index page
function index() {
  window.location.href = window.location.origin;
}

//  log in
function log_in() {
  window.location.href = window.location.origin + "/Pages/Login/login.html";
}
// sign up
function sign_up() {
  window.location.href = window.location.origin + "/Pages/Login/Register.html";
}

//  for profile image
let loguser = JSON.parse(localStorage.getItem("details"));

let register_div = document.querySelector(".register");
let profile = document.querySelector(".profile");

if (loguser != null) {
  register_div.style.display = "none";
  profile.style.display = "block";
}

// dropdown

function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches(".profile")) {
    let myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

// Log out

function logout() {
  localStorage.removeItem("details");
  location.reload();
}
