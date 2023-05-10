let oppo = JSON.parse(localStorage.getItem("opponent_list"));
let logged = JSON.parse(localStorage.getItem("details"));

// host match only if logged in
function host_oppo() {
  if (logged != null) {
    location.href = "./Pages/Host/Host.html";
  } else {
    alert("If you want to host a match, You have to login");
  }
}

for (let i = 0; i < oppo.length; i++) {
  // <div class="container" >
  let div_container = document.createElement("div");
  div_container.setAttribute("class", "container");
  div_container.setAttribute("id", "container");
  console.log(div_container);

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
  img_oppo.setAttribute("src", oppo[i].team_logo);
  div_oppo.append(img_oppo);

  //  <p>Kandigai lions</p>
  let p_logo = document.createElement("p");
  p_logo.innerText = oppo[i].team_name;
  div_oppo.append(p_logo);

  // <h1>V/S<h1>
  let h1 = document.createElement("h1");
  h1.innerText = "V/S";
  div_opponent_logo.append(h1);

  // <div class="add-user-div">
  let div_adduser = document.createElement("div");
  div_adduser.setAttribute("class", oppo[i]["uuid"]);
  // div_adduser.setAttribute("class", "add-user-div");
  div_adduser.setAttribute("id", "add-user-div");
  div_opponent_logo.append(div_adduser);

  // <img class="add-user" src="./Assests/Images/icon/add-user.png" />
  let img_add_user = document.createElement("img");
  img_add_user.setAttribute("class", "add-user");
  img_add_user.setAttribute("src", "./Assests/Images/icon/add-user.png");
  div_adduser.append(img_add_user);

  //  <p class="adduser-p">Waiting!</p>
  let p_adduser = document.createElement("p");
  p_adduser.setAttribute("class", "adduser-p");
  p_adduser.setAttribute("id", "adduser-p");
  p_adduser.innerText = "Waiting!";
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
  div_img_date.innerText = oppo[i].date;
  div_place_date.append(div_img_date);

  let img_date = document.createElement("img");
  img_date.setAttribute("src", "./Assests/Images/icon/calendar.png");
  div_img_date.prepend(img_date);

  // <div <img src="./Assests/Images/icon/placeholder.png"  />  Asthinapuram </div>
  let div_img_place = document.createElement("div");
  div_img_place.innerText = oppo[i]["place"];
  div_place_date.append(div_img_place);

  let img_place = document.createElement("img");
  img_place.setAttribute("src", "./Assests/Images/icon/placeholder.png");
  div_img_place.prepend(img_place);

  // <div class="join-btn"><a href="./Pages/Join/Join.html"><button>Join</button></a></div>
  let div_join = document.createElement("div");
  div_join.setAttribute("class", "join-btn");
  div_place_date_container.append(div_join);

  let button = document.createElement("button");
  button.setAttribute("id", oppo[i]["uuid"]);
  button.setAttribute("onclick", "join_btn(this.id)");
  button.innerText = "Join";
  div_join.append(button);

  if (oppo[i]["login_email"] == logged) {
    // <div class="edit-delete-btn"></div>
    let edit_delete = document.createElement("div");
    edit_delete.setAttribute("class", "edit-delete-btn");
    div_container.prepend(edit_delete);

    let a_edit = document.createElement("a");
    a_edit.setAttribute(
      "href",
      "./Pages/Host/edit.html?edit_id=" + oppo[i]["uuid"]
    );
    edit_delete.append(a_edit);

    // <img src="./Assests/Images/icon/pencil.svg" alt="edit" />
    let edit = document.createElement("img");
    edit.setAttribute("src", "../Requirment/Assests/Images/icon/pencil.svg");
    edit.setAttribute("alt", "edit");
    edit.setAttribute("id", "edit");
    // edit.setAttribute("class", oppo[i]["uuid"]);
    // edit.setAttribute("onclick", "edit()");
    a_edit.append(edit);

    let a_delete = document.createElement("a");
    a_delete.setAttribute(
      "href",
      "./Pages/Host/delete.html?delete_id=" + oppo[i]["uuid"]
    );
    edit_delete.append(a_delete);

    // <img src="./Assests/Images/icon/delete.svg" alt="delete" />
    let del;
    del = document.createElement("img");
    del.setAttribute("src", "../Requirment/Assests/Images/icon/delete.svg");
    del.setAttribute("alt", "delete");
    // del.setAttribute("id", oppo[i]["uuid"]);
    // del.setAttribute("onclick", "del(this.id)");
    a_delete.append(del);
  }
  document.getElementById("main-container").append(div_container);
}

// Total teams list
let total_teams = JSON.parse(localStorage.getItem("team"));

// User's team
let user_team = total_teams.find((team) => logged == team["login_user"]);
console.log(user_team);

// If the user had already created the team they can join
let host_id = [];
function join_btn(e) {
  host_id.push(e);
  localStorage.setItem("oppo_join_uuid", JSON.stringify(e));

  if (user_team != null) {
    window.location.href = "./Pages/Join/Join.html";
  }
}

// if the user joined to the hosted opponent
let joined_oppo_list = JSON.parse(localStorage.getItem("joined_opponent_list"));
console.log(joined_oppo_list);

for (let i = 0; i < joined_oppo_list.length; i++) {
  let join = document.getElementById(joined_oppo_list[i]["hosted_oppo_id"]);
  if (join.getAttribute("id") == joined_oppo_list[i]["hosted_oppo_id"]) {
    // Checking if the user is joined or not.
    let joined_user = joined_oppo_list.find(
      (team) => join.getAttribute("id") == team["hosted_oppo_id"]
    );
    console.log(joined_user);

    // joined user's div has change the border and put the image
    let joined_user_div = document.getElementsByClassName(
      joined_user["hosted_oppo_id"]
    );

    // joined user's image
    let joined_user_img = joined_user_div[0].firstChild;

    // joined user's para
    let joined_user_para = joined_user_div[0].lastChild;

    join.innerText = "Joined";
    join.style.backgroundColor = "slategrey";

    // joined user's div
    joined_user_div[0].style.border = "none";

    // For joined user's image
    joined_user_img.setAttribute("src", joined_user["team_logo"]);
    joined_user_img.style.width = "150px";
    joined_user_img.style.height = "150px";
    joined_user_img.style.borderRadius = "50%";
    joined_user_img.style.marginLeft = "10px";

    // for joined user para it has to the name
    joined_user_para.innerText = joined_user["team_name"];
    joined_user_para.style.opacity = "1";

    join.addEventListener("click", function (e) {
      e.preventDefault();
      if (joined_user["log_user"] == logged) {
        alert("You've already joined");
        window.location.href = "Opponent.html";
      } else {
        alert("Someone has already joined");
        window.location.href = "Opponent.html";
      }
    });
  }
}
