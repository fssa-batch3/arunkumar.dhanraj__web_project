// setting the turf booking details in the local storage
let book = document.getElementById("book");

book.addEventListener("click", function (e) {
  e.preventDefault();

  const date = document.getElementById("date").value;
  const fromTime = document.getElementById("from-time").value;
  const toTime = document.getElementById("to-time").value;
  const login_user = JSON.parse(localStorage.getItem("details"));
  // turf card id
  const turf_book_id = JSON.parse(localStorage.getItem("turf_book_id"));
  const booking_id = Date.now();

  let turf_arr = [];

  let turt_obj = {
    date,
    fromTime,
    toTime,
    login_user,
    turf_book_id,
    booking_id,
  };

  if (localStorage.getItem("turf_booking") != null) {
    turf_arr = JSON.parse(localStorage.getItem("turf_booking"));
  }

  turf_arr.push(turt_obj);

  localStorage.setItem("turf_booking", JSON.stringify(turf_arr));

  alert("You have booked this turf and It will be added to your bookings");

  window.location.href = "../Turf.html";
});
