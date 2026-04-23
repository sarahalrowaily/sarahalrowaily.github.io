// Contact Form Validation
function validateForm(event) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill out all required fields.");
    event.preventDefault();
  }
}
function toggleDescription(id) {
  var desc = document.getElementById(id);

  if (desc.style.display === "none") {
    desc.style.display = "block";
  } else {
    desc.style.display = "none";
  }
}
