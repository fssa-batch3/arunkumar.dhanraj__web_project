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
  div_adduser.setAttribute("class", "add-user-div");
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
  div_opponent_logo.append(p_adduser);

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
  button.innerText = "Join";
  div_join.append(button);

  if (oppo[i]["login_email"] == logged) {
    // <div class="edit-delete-btn"></div>
    let edit_delete = document.createElement("div");
    edit_delete.setAttribute("class", "edit-delete-btn");
    div_container.prepend(edit_delete);

    // <img src="./Assests/Images/icon/pencil.svg" alt="edit" />
    let edit = document.createElement("img");
    edit.setAttribute("src", "../Requirment/Assests/Images/icon/pencil.svg");
    edit.setAttribute("alt", "edit");
    edit.setAttribute("id", oppo[i]["uuid"]);
    edit.setAttribute("onclick", "edit(this.id)");
    edit_delete.append(edit);

    // <img src="./Assests/Images/icon/delete.svg" alt="delete" />
    let del;
    del = document.createElement("img");
    del.setAttribute("src", "../Requirment/Assests/Images/icon/delete.svg");
    del.setAttribute("alt", "delete");
    del.setAttribute("id", oppo[i]["uuid"]);
    del.setAttribute("onclick", "del(this.id)");
    edit_delete.append(del);
  }
  document.getElementById("main-container").append(div_container);
}

// opponent_card' uuid to edit button
let edit_id = [];
function edit(uuid) {
  edit_id.push(uuid);

  localStorage.setItem("opponent_edit_uuid", JSON.stringify(edit_id));
  location.href = "./Pages/Host/edit.html";
}

// opponent_card' uuid to delete button
let del_id = [];
console.log(del_id);
function del(uuid) {
  del_id.push(uuid);

  localStorage.setItem("opponent_delete_uuid", JSON.stringify(del_id));

  let oppo_list = JSON.parse(localStorage.getItem("opponent_list"));
  console.log(oppo_list);
  let oppo_uuid = JSON.parse(localStorage.getItem("opponent_delete_uuid"));
  console.log(uuid);
  let oppo_card = oppo_list.find(function (obj) {
    let check = obj["uuid"];
    if (check == oppo_uuid) {
      return true;
    }
  });

  let index = oppo_list.indexOf(oppo_card);
  oppo_list.splice(index, 1);

  localStorage.setItem("opponent_list", JSON.stringify(oppo_list));

  DialogBox.confirm(
    "Are you sure want to delete this?",
    null,
    "Yes,Delete",
    "No"
  ).then((result) => {
    console.log(result);
    location.reload();
  });
}
