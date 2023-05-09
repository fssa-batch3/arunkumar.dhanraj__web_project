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

// home btn in navbar
function home() {
  window.location.href = window.location.origin;
}

// features btn in navbar
function features() {
  window.location.href = window.location.origin + "#features";
}

// about btn in navbar
function about() {
  window.location.href = window.location.origin + "#about";
}

// profile page
function user() {
  window.location.href =
    window.location.origin + "/Pages/Profile/userprofile.html";
}

// Log out

function logout() {
  localStorage.removeItem("details");
  location.reload();
}

// Turf card feature
function turf_container() {
  window.location.href = "./Pages/Turf/Turf.html";
}

// Opponent card feature
function opponent_container() {
  window.location.href = "./Pages/Opponent/Opponent.html";
}

// Requirments card feature
function requirement_container() {
  window.location.href = "./Pages/Requirment/Requirment.html";
}

// profile image from Local storage
const signed_up = JSON.parse(localStorage.getItem("userDetails"));

const log = JSON.parse(localStorage.getItem("details"));

const logged_obj = signed_up.find((reg) => log == reg["email"]);

const profile_logo = document.querySelector(".profile");

profile_logo.setAttribute("src", logged_obj["profile"]);

//  for profile image display
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
