var populate_modal = function(image) {
	// Get the modal
	var modal = document.getElementById('myModal');
	// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
	var modalImg = modal.querySelector("img");
	var captionText = modal.querySelector("figcaption");
	// Get the image and insert it inside the modal - use its "alt" text as a caption
	modal.style.display = "block";
	modalImg.src = this.src;
	modalImg.width = this.width;
	modalImg.height = this.height;
	captionText.innerHTML = this.alt;
	// Get the <span> element that closes the modal
	var span = modal.querySelector(".close");

	// When the user clicks on <span> (x), close the modal
	modal.onclick = function() { 
	  modal.style.display = "none";
	}
}

var images = document.querySelectorAll("img");
for (var image of images) {
	image.onclick = populate_modal;
}