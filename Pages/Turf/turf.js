// JSON for the product
let turf_card = [
  {
    image: "./Assests/Images/Image/Screenshot 2022-12-18 204900.jpg",
    text: "KK cricket ground,Knight riders club,Near Asthinapuram,Chrompet.",
    alt: "KK cricket ground ",
  },
  {
    image: "./Assests/Images/Image/Screenshot 2022-12-18 204835.jpg",
    text: "Kalvoy cricket turf,KK riders club,Near Pandur,Kandigai.",
    alt: "Kalvoy cricket turf ",
  },
  {
    image: "./Assests/Images/Image/Screenshot 2022-12-18 204800.jpg",
    text: "Kandigai cricket turf,Kalvoy knight riders,Near Guduvancherry,Potheri.",
    alt: "Kandigai cricket turf ",
  },
  {
    image: "./Assests/Images/Image/Screenshot 2022-12-18 204642.jpg",
    text: "KKR cricket ground,Knight riders club,Near Kannivakkam,Kalvoy.",
    alt: "KKR cricket ground ",
  },
];
// end of the JSON

let n = 3;
for (let i = 0; i <= n; i++) {
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
  img.setAttribute("alt", turf_card[i]["alt"]);
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

  document.querySelector("div.turf-list").append(div_turf_details_1);
}

// alert
document.getElementById("btn").onclick = () => {
  window.alert("This page is under construction");
};
