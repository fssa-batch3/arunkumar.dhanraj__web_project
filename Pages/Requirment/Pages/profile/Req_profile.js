// Redirect to the index back
function index() {
  window.location.href = window.location.origin;
}

// Getting the req user's id in the url params
const req_id = window.location.search;
const req_params = new URLSearchParams(req_id);
const req_details = req_params.get("req_id");

// Registered users' full details
let register = JSON.parse(localStorage.getItem("userDetails"));

// Requested user's details
let req_user = register.find((mail) => req_details == mail["email"]);
console.log(req_user);

// requsted user's details in Front end

// Geting the HTML tags
let profile_pic = document.getElementById("profile-pic");
let username = document.getElementById("username");
let first_name = document.getElementById("fname");
let last_name = document.getElementById("lname");
let dob = document.getElementById("dob");
let age = document.getElementById("age");
let gender = document.getElementById("gender");
let address = document.getElementById("address");
let phone_number = document.getElementById("phone-number");
let alter_number = document.getElementById("alter-number");
let email = document.getElementById("email");
let blood_group = document.getElementById("blood-group");
let availability = document.getElementById("availability");
let skill = document.getElementById("skill");
let category = document.getElementById("category");
let record = document.getElementById("record");

// Putting the req user's details in the html tags value/innertext/src
profile_pic.setAttribute("src", req_user["profile"]);
username.innerText = req_user["username"];
first_name.value = req_user["fname"];
last_name.value = req_user["lname"];
dob.value = req_user["dob"];
age.value = req_user["age"];
gender.value = req_user["gender"];
address.value = req_user["address"];
phone_number.value = req_user["phonenumber"];
alter_number.value = req_user["alter_number"];
email.value = req_user["email"];
blood_group.value = req_user["blood_group"];
availability.value = req_user["avail"];
skill.value = req_user["skill"];
category.value = req_user["category"];
record.value = req_user["record"];

// function for the back button
let back = document.getElementById("back");
back.addEventListener("click", function (e) {
  e.preventDefault();
  history.back();
});
