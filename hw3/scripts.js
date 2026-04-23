// Contact Form Validation
function validateForm(event) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill out all required fields.");
    event.preventDefault();
  }
}
