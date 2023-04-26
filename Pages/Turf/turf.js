// JSON for the product
//let turf_card = [];

let turf_card = JSON.parse(localStorage.getItem("turflist"));
let logged = JSON.parse(localStorage.getItem("details"));
//
// end of the JSON

// function for create
//function create_card(turf_card) {
for (let i = 0; i < turf_card.length; i++) {
  // for append
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
  img.setAttribute("src", turf_card[i]["image"]);
  // img.setAttribute("alt", turf_card[i]["alt"]);
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
  p.innerText = turf_card[i]["text"];
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
  a.setAttribute("href", "./Pages/Book.html");
  div_details_book_btn.append(a);

  //<button>Book now</button>
  let button;
  button = document.createElement("button");
  button.setAttribute("id", "btn");
  button.innerText = "Book now";
  a.append(button);
  //append book

  if (turf_card[i]["login_email"] == logged) {
    // edit and delete div

    // <div class="icons-and-delete"></div>
    let editAndDelete_div;
    editAndDelete_div = document.createElement("div");
    editAndDelete_div.setAttribute("class", "icons-and-delete");
    div_details_book_btn.append(editAndDelete_div);

    // edit image
    // <img src="./Assests/Images/icon/pencil.svg" alt="edit" />
    let edit_img;
    edit_img = document.createElement("img");
    edit_img.setAttribute("src", "./Assests/Images/icon/pencil.svg");
    edit_img.setAttribute("alt", "edit");
    edit_img.setAttribute("id", turf_card[i]["id"]);
    edit_img.setAttribute("onclick", "edit(this.id)");
    editAndDelete_div.append(edit_img);

    // delete image
    // <img src="./Assests/Images/icon/delete.svg" alt="delete" />
    let delete_img;
    delete_img = document.createElement("img");
    delete_img.setAttribute("src", "./Assests/Images/icon/delete.svg");
    delete_img.setAttribute("id", turf_card[i]["id"]);
    delete_img.setAttribute("onclick", "del(this.id)");
    editAndDelete_div.append(delete_img);
  }

  document.querySelector("div.turf-list").append(div_turf_details_1);
}

// turf card's uuid to edit button
let id = [];
function edit(e) {
  id.push(e);
  console.log(e);
  localStorage.setItem("turf_uuid", JSON.stringify(id));
  location.href = "./Pages/edit.html";
}

// turf card's uuid to delete button
let uuid = [];
function del(id) {
  uuid.push(id);
  console.log(id);
  localStorage.setItem("turf_delete_uuid", JSON.stringify(uuid));

  let turf_list = JSON.parse(localStorage.getItem("turflist"));
  console.log(turf_list);

  let turf_uuid = JSON.parse(localStorage.getItem("turf_delete_uuid"));
  console.log(turf_uuid);
  let turfcard = turf_list.find(function (obj) {
    let check_id = obj["id"];
    if (check_id == turf_uuid) {
      return true;
    }
  });
  console.log(turfcard);

  let det = turf_list.indexOf(turfcard);
  console.log(det);

  turf_list.splice(det, 1);
  localStorage.setItem("turflist", JSON.stringify(turf_list));
  location.reload();
}

// delete
