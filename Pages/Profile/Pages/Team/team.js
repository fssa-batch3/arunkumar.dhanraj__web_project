// for create team
let create_team = document.getElementById("create-team");

create_team.addEventListener("click", function (e) {
  e.preventDefault();

  // Getting input tags' value
  let team_name = document.getElementById("name").value;
  let team_logo = document.getElementById("logo").value;
  let skill_level = document.getElementById("skill").value;
  let team_strength = document.getElementById("strength").value;
  let about_team = document.getElementById("message").value;
  let login_user = JSON.parse(localStorage.getItem("details"));

  let arr = [];

  let obj = {
    team_name,
    team_logo,
    skill_level,
    team_strength,
    about_team,
    login_user,
  };

  if (localStorage.getItem("team") != null) {
    arr = JSON.parse(localStorage.getItem("team"));
  }

  arr.push(obj);

  localStorage.setItem("team", JSON.stringify(arr));

  window.location.href =
    window.location.origin + "/Pages/Profile/userprofile.html";
});
