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
var quote = document.getElementById("quote");
if (quote) {
  quote.addEventListener("mouseover", function() {
    quote.style.backgroundColor = "#f3e7e5";
    quote.style.fontStyle = "italic";
  });

  quote.addEventListener("mouseout", function() {
    quote.style.backgroundColor = "";
    quote.style.fontStyle = "";
  });
}
