// index page
function index() {
  window.location.href = window.location.origin;
}

// edit button variable
let edit = document.getElementById("edit");

// done button variable
let done = document.getElementById("done");

// delete button variable
let del = document.getElementById("delete");

// back button variable
let back = document.getElementById("back");

// My booking button variable
let booking = document.getElementById("booking");

// Add team button variable
let add_team = document.getElementById("add_team");

// User team button variable
let loguser_team = document.getElementById("team");
// User name button's image varaible
let loguser_team_pic = document.getElementById("team-pic");
// User name button's para variale
let loguser_team_name = document.getElementById("team-name");

// Signed up users
const register = JSON.parse(localStorage.getItem("userDetails"));

// Logged in user
const login = JSON.parse(localStorage.getItem("details"));

// Logged user object
let logged = register.find((reg) => login == reg["email"]);
console.log(logged);

// For profile pic to be shown
const profile_logo = document.getElementById("profile-pic");
profile_logo.setAttribute("src", logged["profile"]);

// register details in profile page
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone_number = document.getElementById("phone-number");

username.innerText = logged["username"];
email.value = logged["email"];
phone_number.value = logged["phonenumber"];

// form inputs
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let dob = document.getElementById("dob");
let age = document.getElementById("age");
let gender = document.getElementById("gender");
let address = document.getElementById("address");
let phonenumber = document.getElementById("phone-number");
let alter_number = document.getElementById("alter-number");
let profile = document.getElementById("edit-profile");
let blood_group = document.getElementById("blood-group");
let avail = document.getElementById("availability");
let skill = document.getElementById("skill");
let category = document.getElementById("category");
let record = document.getElementById("record");

// values in input tags
fname.value = logged["fname"];
lname.value = logged["lname"];
dob.value = logged["dob"];
age.value = logged["age"];
gender.value = logged["gender"];
address.value = logged["address"];
phonenumber.value = logged["phonenumber"];
alter_number.value = logged["alter_number"];
profile.value = logged["profile"];
blood_group.value = logged["blood_group"];
avail.value = logged["avail"];
skill.value = logged["skill"];
category.value = logged["category"];
record.value = logged["record"];

// edit button turns into done button
edit.addEventListener("click", function (ed) {
  ed.preventDefault();
  ed.target.style.display = "none";
  done.style.display = "block";

  // Removing the inputs' disabled attribute
  fname.disabled = false;
  lname.disabled = false;
  dob.disabled = false;
  age.disabled = false;
  gender.disabled = false;
  address.disabled = false;
  phonenumber.disabled = false;
  alter_number.disabled = false;
  profile.disabled = false;
  blood_group.disabled = false;
  avail.disabled = false;
  skill.disabled = false;
  category.disabled = false;
  record.disabled = false;
});

// done to get details and update the user
done.addEventListener("click", function (e) {
  e.preventDefault();

  let new_obj = {
    fname: fname.value,
    lname: lname.value,
    dob: dob.value,
    age: age.value,
    gender: gender.value,
    address: address.value,
    phonenumber: phonenumber.value,
    alter_number: alter_number.value,
    profile: profile.value,
    blood_group: blood_group.value,
    avail: avail.value,
    skill: skill.value,
    category: category.value,
    record: record.value,
  };

  let update = Object.assign(logged, new_obj);

  let index = register.indexOf(logged);

  register[index] = update;

  localStorage.setItem("userDetails", JSON.stringify(register));

  // Setting the attribute as disabled to all the inputs
  fname.disabled = true;
  lname.disabled = true;
  dob.disabled = true;
  age.disabled = true;
  gender.disabled = true;
  address.disabled = true;
  phonenumber.disabled = true;
  alter_number.disabled = true;
  profile.disabled = true;
  blood_group.disabled = true;
  avail.disabled = true;
  skill.disabled = true;
  category.disabled = true;
  record.disabled = true;

  // Buttons back to normal form
  e.target.style.display = "none";
  edit.style.display = "block";

  // reload
  location.reload();
});

// to delete the user
del.addEventListener("click", function (dlt) {
  dlt.preventDefault();

  let responce = confirm("Are you sure want to delete your account?");
  if (responce) {
    let i = register.indexOf(logged);
    register.splice(i, 1);

    localStorage.setItem("userDetails", JSON.stringify(register));
    localStorage.removeItem("details");
    window.location.href = window.location.origin;
  }
});

// back button function - it will redirect to the index page
back.addEventListener("click", function (e) {
  e.preventDefault();
  if (history.back() == window.location.origin + "/Pages/Login/login.html") {
    window.location.href = window.location.origin;
  } else if (
    history.back() ==
    window.location.origin + "/Pages/Login/Register.html"
  ) {
    window.location.href = window.location.origin;
  } else {
    history.back();
  }
});

// my booking button's function
booking.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./Pages/Booking/booking.html";
});

// For add team button's function
add_team.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "../Profile/Pages/Team/team.html";
});

// For your team
let created_teams = JSON.parse(localStorage.getItem("team"));

// checking if the user created the team
let user_team = created_teams.find((team) => login === team["login_user"]);
console.log(user_team);

// If the user created his/her team. Have to display the team name
if (user_team != null) {
  add_team.style.display = "none";
  loguser_team.style.display = "block";

  loguser_team_pic.setAttribute("src", user_team["team_logo"]);
  loguser_team_name.innerHTML = user_team["team_name"];
}

// For age calculating from dob

// MM/DD/YYYY
let today = moment().format("L").split("/");
let today_date = today.map(Number);
console.log(today_date);

// YYYY/MM/DD
let db = dob.value.split("-");
let birth = db.map(Number);
console.log(birth);

console.log(today_date[2] - birth[0]);
