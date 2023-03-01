let requirment = [
  {
    profile_img: "./Assests/Images/Image/logo/cricketer (1).png",
    para: "D Arunkumar is looking for a team join as a batter in guduvancherry",
  },
];

// var today = format(Date.now() - 30 * 1000, "round-minute");
// var dd = today.getTime();
// main

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

  //  <img class="profile" src="./Assests/Images/Image/logo/cricketer (1).png">
  let img_profile;
  img_profile = document.createElement("img");
  img_profile.setAttribute("class", "profile");
  img_profile.setAttribute(
    "src",
    "./Assests/Images/Image/logo/cricketer (1).png"
  );
  // img_profile.setAttribute("alt", "...");
  div_profile_details.append(img_profile);

  // <div></div>
  let div_para;
  div_para = document.createElement("div");
  div_profile_details.append(div_para);

  //  <span></span>
  let span_para;
  span_para = document.createElement("span");
  span_para.innerText = requirment[i].para;
  div_para.append(span_para);

  // <p></p>
  let p_para;
  p_para = document.createElement("p");
  p_para.innerText = timeAgo;
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

  //<img src="./Assests/Images/Image/boy.png" alt="Profile" />
  let img_share;
  img_share = document.createElement("img");
  img_share.setAttribute("src", "./Assests/Images/Image/boy.png");
  img_share.setAttribute("alt", "Profile");
  div_info.append(img_share);

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

  document.querySelector(".main-container").append(div_requir_1);
}
