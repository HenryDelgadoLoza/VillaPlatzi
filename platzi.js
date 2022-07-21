var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

//para cargar la imagen dentro del canvas, se debe crear un objeto imagen nuevo y esa imagen insertarla al canvas
var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujar);

var vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load", dibujarVacas);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", dibujarPollos);

var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", dibujarCerdos);

function dibujar()
{
    //draw.Image => requiere la ruta del canvas, la posx, posy
    papel.drawImage(fondo, 0, 0);
}

function dibujarVacas()
{
    //draw.Image => requiere la ruta del canvas, la posx, posy
    papel.drawImage(vaca, 10, 50);
}

function dibujarPollos()
{
    //draw.Image => requiere la ruta del canvas, la posx, posy
    papel.drawImage(pollo, 30, 100);
}

function dibujarCerdos()
{
    //draw.Image => requiere la ruta del canvas, la posx, posy
    papel.drawImage(cerdo, 80, 200);
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
