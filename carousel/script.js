var i = 0; 			// init var i
var images = [];	// Images Array
var temps = 2000;	// Temps de transition 2s
	 
// Liste imgs
images[0] = "img/shakira.jpg";
images[1] = "img/shakira2.jpg";

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


	// array couleurs
	var colors = ['lightgreen', 'skyblue']; 
	var j = 0; // init var j

	/* change de bg tous les 2s temps = 2000 */
	setInterval(function(){
		document.querySelector('section').style.background = colors[j];
		j++;
		if (j == colors.length) j = 0;
	}, temps);
}

/* 
la fonction s'exécute ici avec la méthode setInterval
Ceci permet la synchronisation, car les 2 fonctions s'exécutent en mm temps
*/
changeImg();



/* jQuery UI pour progress bar  */

$( function() {

    $( "#progressbar" ).progressbar({
		value: 20
    });
  } );

