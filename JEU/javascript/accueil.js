var bodytheme = document.getElementById("bodytheme");
var titre = document.getElementById("titre");
var menu = document.getElementById("menu");
var lienTitre = document.getElementById("lien");
var centralwindow = document.getElementById("centralwindow");
var titrewindow = document.getElementById("titrewindow");
document.getElementById("boutonfoncé").addEventListener("click", function(){
			titre.style.background = "linear-gradient(rgba(255, 255, 255, 0.3), black)";
			titre.style.borderBottom = "7px solid white";
			bodytheme.style.backgroundImage = "url('images/sombre.jpg')";
			bodytheme.style.backgroundAttachment = "fixed";
			bodytheme.style.backgroundSize = "100%";
			titre.style.borderBottom = "solid 3px white";
			lienTitre.style.color = "DarkKhaki";
			centralwindow.style.backgroundImage = "url('images/windowbg.jpg')";
			centralwindow.style.backgroundSize = "100%";
			centralwindow.style.backgroundRepeat = "no-repeat";
			titrewindow.style.backgroundColor = "darkred";
			titrewindow.style.color = "#FFFACD";
			titrewindow.style.fontFamily = "'Lexend Giga', sans-serif";
			titrewindow.style.textAlign = "center"
});
document.getElementById("boutonclair").addEventListener("click", function(){
			titre.style.color = "white";
			titre.style.background = "linear-gradient(lightblue, blue)";
			titre.style.borderBottom = "7px solid white";
			bodytheme.style.backgroundColor = "#ADD8E6";
			bodytheme.style.backgroundAttachment = "fixed";
			bodytheme.style.backgroundSize = "100%";
			titre.style.borderBottom = "solid 3px white";
			lienTitre.style.color = "white";
});
