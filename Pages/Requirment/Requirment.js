let requirment = JSON.parse(localStorage.getItem("req_list"));
let logged = JSON.parse(localStorage.getItem("details"));

// host turf only if logged in
function host_req() {
  if (logged != null) {
    location.href = "./Pages/Form.html";
  } else {
    alert("If you want post your requirments, You have to log in");
  }
}

// if requirements are null, have to show there are no req
if (requirment.length == 0) {
  document.getElementById("h2").style.display = "block";
}

// local storage
for (let i = 0; i < requirment.length; i++) {
  //  <div class="requir-1"></div>
  let div_requir_1;
  div_requir_1 = document.createElement("div");
  div_requir_1.setAttribute("class", "requir-1");
  console.log(div_requir_1);

  //  <div class="profile-details"></div>
  let div_profile_details;
  div_profile_details = document.createElement("div");
  div_profile_details.setAttribute("class", "profile-details");
  div_requir_1.append(div_profile_details);

  let anchor;
  anchor = document.createElement("a");
  anchor.setAttribute(
    "href",
    "./Pages/profile/Req_profile.html?req_id=" + requirment[i]["login_email"]
  );
  div_profile_details.append(anchor);

  //  <img class="profile" src="./Assests/Images/Image/logo/cricketer (1).png">
  let img_profile;
  img_profile = document.createElement("img");
  img_profile.setAttribute("class", "profile_logo");
  img_profile.setAttribute("src", requirment[i]["profile_logo"]);
  img_profile.setAttribute("alt", "Profile");
  anchor.append(img_profile);

  // <div></div>
  let div_para;
  div_para = document.createElement("div");
  div_profile_details.append(div_para);

  //  <span></span>
  let span_para;
  span_para = document.createElement("span");
  span_para.innerText = requirment[i].message;
  div_para.append(span_para);

  // <p></p>
  let p_para;
  p_para = document.createElement("p");
  p_para.innerText = requirment[i]["time"];
  div_para.append(p_para);

  //  profile-1
  //<div class="more-info"></div>
  let div_more_info;
  div_more_info = document.createElement("div");
  div_more_info.setAttribute("class", "more-info");
  div_requir_1.append(div_more_info);

  //<div class="info"></div>
  let div_info;
  div_info = document.createElement("div");
  div_info.setAttribute("class", "info");
  div_more_info.append(div_info);

  let a_href;
  a_href = document.createElement("a");
  a_href.setAttribute(
    "href",
    "./Pages/profile/Req_profile.html?req_id=" + requirment[i]["login_email"]
  );
  div_info.append(a_href);

  //<img src="./Assests/Images/Image/boy.png" alt="Profile" />
  let img_share;
  img_share = document.createElement("img");
  img_share.setAttribute("src", "./Assests/Images/Image/boy.png");
  img_share.setAttribute("alt", "Profile");
  a_href.append(img_share);

  //<p>Profile</p>
  let p_share;
  p_share = document.createElement("p");
  p_share.innerText = "Profile";
  div_info.append(p_share);

  // profile-2
  //<div class="info"></div>
  let div_info_1;
  div_info_1 = document.createElement("div");
  div_info_1.setAttribute("class", "info");
  div_more_info.append(div_info_1);

  //<img src="./Assests/Images/Image/boy.png" alt="Profile" />
  let img_share_1;
  img_share_1 = document.createElement("img");
  img_share_1.setAttribute("src", "./Assests/Images/Image/send.png");
  img_share_1.setAttribute("alt", "Profile");
  div_info_1.append(img_share_1);

  //<p>Profile</p>
  let p_share_1;
  p_share_1 = document.createElement("p");
  p_share_1.innerText = "Share";
  div_info_1.append(p_share_1);

  // profile-3
  //<div class="info"></div>
  let div_info_2;
  div_info_2 = document.createElement("div");
  div_info_2.setAttribute("class", "info");
  div_more_info.append(div_info_2);

  //<img src="./Assests/Images/Image/boy.png" alt="Profile" />
  let img_share_2;
  img_share_2 = document.createElement("img");
  img_share_2.setAttribute("src", "./Assests/Images/Image/contact.png");
  img_share_2.setAttribute("alt", "Profile");
  div_info_2.append(img_share_2);

  //<p>Profile</p>
  let p_share_2;
  p_share_2 = document.createElement("p");
  p_share_2.innerText = "Contact";
  div_info_2.append(p_share_2);

  if (requirment[i]["login_email"] == logged) {
    // <div class="edit-delete-btn"></div>
    let edit_delete;
    edit_delete = document.createElement("div");
    edit_delete.setAttribute("class", "edit-delete-btn");
    div_requir_1.prepend(edit_delete);

    // <img src="./Assests/Images/icon/pencil.svg" alt="edit" />
    let edit;
    edit = document.createElement("img");
    edit.setAttribute("src", "./Assests/Images/icon/pencil.svg");
    edit.setAttribute("alt", "edit");
    edit.setAttribute("id", requirment[i]["id"]);
    edit.setAttribute("onclick", "edit(this.id)");
    edit_delete.append(edit);

    // <img src="./Assests/Images/icon/delete.svg" alt="delete" />
    let del;
    del = document.createElement("img");
    del.setAttribute("src", "./Assests/Images/icon/delete.svg");
    del.setAttribute("alt", "delete");
    del.setAttribute("id", requirment[i]["id"]);
    del.setAttribute("onclick", "del(this.id)");
    edit_delete.append(del);
  }
  document.querySelector(".main-container").append(div_requir_1);
}
// edit btn id

let uuid = [];
function edit(id) {
  uuid.push(id);

  localStorage.setItem("req_edit_uuid", JSON.stringify(uuid));
  location.href = "./Pages/edit.html";
}

let id = [];
function del(e) {
  id.push(e);

  localStorage.setItem("req_delete_uuid", JSON.stringify(id));

  let req_list = JSON.parse(localStorage.getItem("req_list"));

  let req_uuid = JSON.parse(localStorage.getItem("req_delete_uuid"));

  let req_card = req_list.find(function (obj) {
    let check = obj["id"];
    if (check == req_uuid) {
      return true;
    }
  });

  let del = req_list.indexOf(req_card);

  let responce = confirm("Do you want to delete this?");

  if (responce) {
    req_list.splice(del, 1);
    localStorage.setItem("req_list", JSON.stringify(req_list));
    location.reload();
  }
}
