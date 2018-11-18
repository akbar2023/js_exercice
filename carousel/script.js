var i = 0; 			// init var i
var images = [];	// Images Array
var background = []; // Background array
var temps = 2000;	// Temps de transition 2s
	 
// Liste imgs
images[0] = "img/mannequinf.jpg";
images[1] = "img/mannequinh.jpg";

// function Change Image
function changeImg(){
	document.slide.src = images[i];

	if(i < images.length - 1){
	  i++; 
	} else {
		i = 0;
	}

	// temps de changement
	setTimeout("changeImg()", temps);
}

// la fonction s'exécute et change d'image tous les 2s
changeImg();

// array couleurs
var colors = ['skyblue', 'orange']; 
var j = 0; // init var j

/* change de bg tous les 2s temps = 2000 */
setInterval(function(){
    document.querySelector('section').style.background = colors[j];
    j++;
    if (j == colors.length) j = 0;
}, temps);


