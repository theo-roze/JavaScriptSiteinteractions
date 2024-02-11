document.addEventListener('DOMContentLoaded', function () {
  // Automatically click on the "Jeux vidéos" tab
  document.querySelector('.tab-jeux_videos button').click();
});

function openCity(evt, cityName) {
  // Hide all tab contents
  var tabcontents = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }

  // Remove 'active' class from all tab links
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the clicked tab content and mark the button as active
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

function switchDarkMode() {
  var body = document.getElementsByTagName("body")[0];
  var header = document.getElementsByTagName("header")[0];
  var footer = document.getElementsByTagName("header")[0];
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    header.classList.remove("dark");
    footer.classList.remove("dark");
  } else {
    body.classList.add("dark");
    header.classList.add("dark");
    footer.classList.add("dark");
  }
}