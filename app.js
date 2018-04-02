//Get modal element
var modal = document.getElementById("simpleModal");
//Get modal button
var modalBtn = document.getElementById("modalBtn");
// Get close button
// getElementByClassName will get us an array or collection with the closeBtn, need to
// specify we want the first one
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// Listen for a click
modalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', clickOutside);

// Function to close modal when clicked outside the modal
// e is an event parameter
// make sure that the target is equal to modal
function clickOutside(e) {
	if(e.target == modal) {
		modal.style.display = 'none';
	}
}

// Function to close modal when x is clicked
function closeModal() {
	modal.style.display = "none";
}

// Function to open modal
function openModal() {
	modal.style.display = 'block';
}
