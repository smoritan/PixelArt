
/*VAR*/

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paletaTotal = document.getElementById('paleta');
var grillaTotal = document.querySelector('#grilla-pixeles');
var imagenesSuperheroes = document.querySelector('.imgs');
// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    document.getElementById('indicador-de-color').style.backgroundColor = colorActual;
    // Completar para que cambie el indicador-de-color al colorActual
  })
);


//FUNCTIONS//

function coloresPantalla () { 
	for(var i = 0; i < nombreColores.length; i++){
		var nuevoDIV = document.createElement('div');
			nuevoDIV.style.backgroundColor = nombreColores[i];
			nuevoDIV.className ='color-paleta';
			paleta.appendChild(nuevoDIV);
		;
	}
}


function grillaPantalla (){
	for (i = 0; i < 1750; i++){
		var pixel = document.createElement('div')
		pixel.style.backgroundColor[i];
		pixel.idName = 'grilla-pixeles';
		pixel.className = 'pixelColor'
		grillaTotal.appendChild(pixel);
	}
}

grillaPantalla();
coloresPantalla();

//MOUSE EVENTS//

var seleccionarColor = document.getElementById('paleta');
seleccionarColor.addEventListener('click', modificarColor);
function modificarColor(e){
	var indicadorColor = document.getElementById('indicador-de-color');
	indicadorColor.style.backgroundColor= e.target.style.backgroundColor;
}

var pintarPixel = document.getElementById('grilla-pixeles');
pintarPixel.addEventListener('click', colocarColor);
function colocarColor(e){
	e.target.style.backgroundColor = document.getElementById('indicador-de-color').style.backgroundColor;
}

var mouse = false;
grillaTotal.addEventListener('mousedown', cambiarApretado);
grillaTotal.addEventListener('mouseup', cambiarNoApretado);

function cambiarApretado(){
	mouse=true;
}

function cambiarNoApretado(){
	mouse=false;
}

grillaTotal.addEventListener('mousemove', colocarColorMovimiento);
function colocarColorMovimiento(e){
		if(mouse){
			e.target.style.backgroundColor = document.getElementById('indicador-de-color').style.backgroundColor;
		}
}

//:::://

//jQuery//
$('#borrar').click(function(){
	$('.pixelColor').fadeOut();
	return grillaPantalla();
});
$('#wonder').click(function(){
	cargarSuperheroe(wonder);
});
$('#batman').click(function(){
	cargarSuperheroe(batman);
});
$('#flash').click(function(){
	cargarSuperheroe(flash);
});
$('#invisible').click(function(){
	cargarSuperheroe(invisible);
});
$('#guardar').click(function(){
	guardarPixelArt();
})