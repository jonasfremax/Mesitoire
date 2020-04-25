var bodytheme = document.getElementById("bodytheme");
var titre = document.getElementById("titre");
document.getElementById("boutonfoncé").addEventListener("click", function(){
	titre.style.color = "white";
	titre.style.backgroundImage = "linear-gradient(#600018, #000000)";
	titre.style.borderBottom = "7px solid white";
	bodytheme.style.backgroundImage = "url('images/sombre.jpg')";
	bodytheme.style.backgroundAttachment = "fixed";
	bodytheme.style.backgroundSize = "100%";
});
document.getElementById("boutonclair").addEventListener("click", function(){
	titre.style.color = "white";
	titre.style.backgroundImage = "linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(0, 0, 255, 0.1))"
	titre.style.borderBottom = "7px solid white";
	bodytheme.style.backgroundImage = "url('images/backgroundnormal.jpg')";
	bodytheme.style.backgroundAttachment = "fixed";
	bodytheme.style.backgroundSize = "100%";
});
