// DESCO
var modal = document.getElementById("project-modal-desco");

// Get the button that opens the modal
var btn = document.getElementById("view-project-desco");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-button")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  console.log('in click')
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

// CEH
var cehmodal = document.getElementById("project-modal-ceh");

// Get the button that opens the modal
var cehbtn = document.getElementById("view-project-ceh");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-button")[1];

// When the user clicks on the button, open the modal
cehbtn.onclick = function() {
  cehmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  cehmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    cehmodal.style.display = "none";
  }
} 

// Inspire PLUS
var inspiremodal = document.getElementById("project-modal-inspire");

// Get the button that opens the modal
var inspirebtn = document.getElementById("view-project-inspire");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-button")[2];

// When the user clicks on the button, open the modal
inspirebtn.onclick = function() {
  inspiremodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  inspiremodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    inspiremodal.style.display = "none";
  }
} 

// // CTCP 30-Year Report
var ctcpmodal = document.getElementById("project-modal-ctcp");

// Get the button that opens the modal
var ctcpbtn = document.getElementById("view-project-ctcp");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-button")[3];

// When the user clicks on the button, open the modal
ctcpbtn.onclick = function() {
  console.log('in click')
  ctcpmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  ctcpmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    ctcpmodal.style.display = "none";
  }
} 