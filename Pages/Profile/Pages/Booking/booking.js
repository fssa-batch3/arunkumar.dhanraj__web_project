// index page
function index() {
  window.location.href = window.location.origin;
}

// profile image from Local storage
const signed_up = JSON.parse(localStorage.getItem("userDetails"));

const log = JSON.parse(localStorage.getItem("details"));

const logged_obj = signed_up.find((reg) => log == reg["email"]);

const profile_logo = document.querySelector(".profile");

profile_logo.setAttribute("src", logged_obj["profile"]);

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

// profile page
function user() {
  window.location.href =
    window.location.origin + "/Pages/Profile/userprofile.html";
}

// Log out

function logout() {
  localStorage.removeItem("details");
  window.location.href = window.location.origin;
}

// users' total booked list
let booked_turf_list = JSON.parse(localStorage.getItem("turf_booking"));

// user's booked turf objects
let booked_turf = booked_turf_list?.filter((obj) => log == obj["login_user"]);
console.log(booked_turf);

// if the user doesn't book anything
let not_booked = document.querySelector(".not-book");
if (booked_turf_list == null || booked_turf === null) {
  not_booked.style.display = "block";
}

// total turf lists
let turf_list = JSON.parse(localStorage.getItem("turflist"));

// for appending the card into the my bookings
for (let i = 0; i < booked_turf?.length; i++) {
  for (let j = 0; j < turf_list?.length; j++) {
    if (booked_turf[i]["turf_book_id"] == turf_list[j]["turf_id"]) {
      //<div class="turf-details-1"></div>
      let div_turf_details_1;
      div_turf_details_1 = document.createElement("div");
      div_turf_details_1.setAttribute("class", "turf-details");
      console.log(div_turf_details_1);

      //<div class="details-image"></div>
      let div_details_image;
      div_details_image = document.createElement("div");
      div_details_image.setAttribute("class", "details-image");
      div_turf_details_1.prepend(div_details_image);

      //  <img src="./Assests/Images/Image/Screenshot 2022-12-18 204900.jpg"/>
      let img;
      img = document.createElement("img");
      img.setAttribute("src", turf_list[j]["image"]);
      div_details_image.append(img);

      //append

      //  para
      //<div class="details-para">
      let div_details_para;
      div_details_para = document.createElement("div");
      div_details_para.setAttribute("class", "details-para");
      div_turf_details_1.append(div_details_para);

      //  <p> KK cricket ground,Knight riders club,Near Nellikuppam,Kandigai.</p>
      let p;
      p = document.createElement("p");
      p.setAttribute("id", "para");
      p.innerText = turf_list[j]["text"];
      div_details_para.append(p);

      // para

      //append book
      //<div class="details-book-btn">
      let div_details_book_btn;
      div_details_book_btn = document.createElement("div");
      div_details_book_btn.setAttribute("class", "details-book-btn");
      div_turf_details_1.append(div_details_book_btn);

      //<a href="./Pages/Book.html"></a>
      let a;
      a = document.createElement("a");
      // a.setAttribute("href", "./Pages/Book.html");
      div_details_book_btn.append(a);

      //<button>Book now</button>
      let button;
      button = document.createElement("button");
      button.setAttribute("class", "btn");
      button.setAttribute("id", "");
      button.setAttribute("onclick", "");
      button.innerText = "Booked";
      a.append(button);
      //append book

      document.querySelector("div.turf-list").append(div_turf_details_1);
    }
  }
}

// Users' total joined opponent lists
let joined_opponents = JSON.parse(localStorage.getItem("joined_opponent_list"));

// Logged in user's joined matches
let user_matches = joined_opponents?.filter((team) => log == team["log_user"]);
console.log(user_matches);

// if the user doesn't join any matches
let no_matches = document.getElementById("no-match");
if (joined_opponents == null || user_matches.length === 0) {
  no_matches.style.display = "block";
}

// Hosted opponent list
let hosted_oppo = JSON.parse(localStorage.getItem("opponent_list"));
console.log(hosted_oppo);

// Appending the joined matches
for (k = 0; k < user_matches?.length; k++) {
  for (let l = 0; l < hosted_oppo?.length; l++) {
    if (user_matches[k]["hosted_oppo_id"] == hosted_oppo[l]["uuid"]) {
      let div_container = document.createElement("div");
      div_container.setAttribute("class", "container");
      div_container.setAttribute("id", "container");

      // <div class="opponent-logo">
      let div_opponent_logo = document.createElement("div");
      div_opponent_logo.setAttribute("class", "opponent-logo");
      div_container.append(div_opponent_logo);

      // <div oppo >
      let div_oppo = document.createElement("div");
      div_opponent_logo.append(div_oppo);

      // <img class="oppo-logo" src="./Assests/Images/icon/logo 2.jpg" />
      let img_oppo = document.createElement("img");
      img_oppo.setAttribute("class", "oppo-logo");
      img_oppo.setAttribute("src", hosted_oppo[l]["team_logo"]);
      div_oppo.append(img_oppo);

      //  <p>Kandigai lions</p>
      let p_logo = document.createElement("p");
      p_logo.innerText = hosted_oppo[l]["team_name"];
      div_oppo.append(p_logo);

      // <h1>V/S<h1>
      let h1 = document.createElement("h1");
      h1.innerText = "V/S";
      div_opponent_logo.append(h1);

      // <div class="add-user-div">
      let div_adduser = document.createElement("div");
      div_adduser.setAttribute("class", "");
      div_adduser.setAttribute("id", "add-user-div");
      div_opponent_logo.append(div_adduser);

      // <img class="add-user" src="./Assests/Images/icon/add-user.png" />
      let img_add_user = document.createElement("img");
      img_add_user.setAttribute("class", "add-user");
      img_add_user.setAttribute("src", user_matches[k]["team_logo"]);
      div_adduser.append(img_add_user);

      //  <p class="adduser-p">Waiting!</p>
      let p_adduser = document.createElement("p");
      p_adduser.setAttribute("class", "adduser-p");
      p_adduser.setAttribute("id", "adduser-p");
      p_adduser.innerText = user_matches[k]["team_name"];
      div_adduser.append(p_adduser);

      //  <div class="place-date-container">
      let div_place_date_container = document.createElement("div");
      div_place_date_container.setAttribute("class", "place-date-container");
      div_container.append(div_place_date_container);

      //  <div class="place-date-div">
      let div_place_date = document.createElement("div");
      div_place_date.setAttribute("class", "place-date-div");
      div_place_date_container.append(div_place_date);

      //  <div><img src="./Assests/Images/icon/calendar.png"  /> Dec 15</div>
      let div_img_date = document.createElement("div");
      div_img_date.innerText = hosted_oppo[l]["date"];
      div_place_date.append(div_img_date);

      let img_date = document.createElement("img");
      img_date.setAttribute(
        "src",
        "../../../Opponent/Assests/Images/icon/calendar.png"
      );
      div_img_date.prepend(img_date);

      // <div <img src="./Assests/Images/icon/placeholder.png"  />  Asthinapuram </div>
      let div_img_place = document.createElement("div");
      div_img_place.innerText = hosted_oppo[l]["place"];
      div_place_date.append(div_img_place);

      let img_place = document.createElement("img");
      img_place.setAttribute(
        "src",
        "../../../Opponent/Assests/Images/icon/placeholder.png"
      );
      div_img_place.prepend(img_place);

      // <div class="join-btn"><a href="./Pages/Join/Join.html"><button>Join</button></a></div>
      let div_join = document.createElement("div");
      div_join.setAttribute("class", "join-btn");
      div_place_date_container.append(div_join);

      let button = document.createElement("button");
      button.setAttribute("id", "");
      button.innerText = "Joined";
      div_join.append(button);

      document.getElementById("oppo-list").append(div_container);
    }
  }
}
