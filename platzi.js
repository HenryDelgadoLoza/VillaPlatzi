var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
//var mapa = "tile.png"; de esta manera no necesitamos nombrar el src de esta variable, puesto que la obtenemos del json creado para cada imagen
var cantidadVacas = parseInt(prompt("Escribe la cantidad de vacas que deseas:"));
var cantidadPollos = parseInt(prompt("Escribe la cantidad de pollos que deseas:"));
var cantidadCerdos = parseInt(prompt("Escribe la cantidad de cerdos que deseas:"));
var cantidadCebras = parseInt(prompt("Escribe la cantidad de cebras que deseas:"));

//creamos un objeto literal o es decir un objeto con la sintaxis de json, para detectar inicialmente cuando es que sucede la carga de imagen
var fondo = {
    url: "tile.png",
    cargaOk: false
}

var vaca = {
    url: "vaca.png", // la forma en que se separan los atributos json es a través de (,)
    cargaOk: false // por defecto empezará en false
};

var pollo = {
    url: "pollo.png",
    cargaOk: false // por defecto empezará en false
};

var cerdo = {
    url: "cerdo.png",
    cargaOk: false // por defecto empezará en false
};

var cebra = {
    url: "cebrita.png",
    cargaOk: false // por defecto empezará en false
};

//para cargar la imagen dentro del canvas, se debe crear un objeto imagen nuevo y esa imagen insertarla al canvas
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

cebra.imagen = new Image();
cebra.imagen.src = cebra.url;
cebra.imagen.addEventListener("load", cargarCebras);

//creamos la función cargarTipo para obtener el estado de la carga, para posteriormente poder dibujar
function cargarFondo()
{
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOk = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOk = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOk = true;
    dibujar();
}

function cargarCebras()
{
    cebra.cargaOk = true;
    dibujar();
}

//Aquí estamos definiendo la condición de que si la imagen ha sido cargada se proceda a dibujarla
function dibujar() 
{
    if (fondo.cargaOk == true)
    {
    //draw.Image => requiere la ruta del canvas, la posx, posy
    papel.drawImage(fondo.imagen, 0, 0);
    } 
    if (vaca.cargaOk == true)
    {
        for(var v=0; v < cantidadVacas; v++)
        {
            var x = aleatorio(0, 7); //por la cantidad de vacas apiñadas, con esto se reduce ello
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if (pollo.cargaOk == true)
    {
        for(var p=0; p < cantidadPollos; p++)
        {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(pollo.imagen, x, y);
        }
    }
    if (cerdo.cargaOk == true)
    {
        for(var c=0; c < cantidadCerdos; c++)
        {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    if (cebra.cargaOk == true)
    {
        for(var b=0; b < cantidadCebras; b++)
        {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(cebra.imagen, x, y);
        }
    }
}

/* Para crear un ciclo de aleatorios en JS
var z;
for(var i=0; i<10; i++)
{
    z = aleatorio(10, 20);
    document.write(z + ", ");
}
document.write(z);
*/
function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}
