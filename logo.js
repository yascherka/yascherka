var swapImage = function() {
	var modal = document.getElementById('myModal');
	var modalImg = modal.querySelector("img");
	modal.style.display = "block";
	modalImg.src = "images/yascherHand.svg";
	modalImg.width = image.width * 1.5;
	modalImg.height = image.height * 1.5
	var span = modal.querySelector(".close");

	modal.onclick = function() { 
	  modal.style.display = "none";
	 }
}

document.querySelector("#yasch").onclick = swapImage

