var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keyup", dibujarCebra);

//creamos el json para los atributos de las teclas
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var posVacas = {
    vacasX: [],
    vacasY: []
};
var posPollos = {
    pollosX: [],
    pollosY: []
};
var posCerdos = {
    cerdosX: [],
    cerdosY: []
};
var xCebra = aleatorio(0,420);
var yCebra = aleatorio(0,420);

//var mapa = "tile.png"; de esta manera no necesitamos nombrar el src de esta variable, puesto que la obtenemos del json creado para cada imagen
var cantidadVacas = parseInt(prompt("Escribe la cantidad de vacas que deseas:"));
var cantidadPollos = parseInt(prompt("Escribe la cantidad de pollos que deseas:"));
var cantidadCerdos = parseInt(prompt("Escribe la cantidad de cerdos que deseas:"));

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
            posVacas.vacasX[v] = x;
            posVacas.vacasY[v] = y;
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
            posPollos.pollosX[p] = x;
            posPollos.pollosY[p] = y;
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
            posCerdos.cerdosX[c] = x;
            posCerdos.cerdosY[c] = y;
        }
    }
    if (cebra.cargaOk == true)
    {
        papel.drawImage(cebra.imagen, x, y);
    }
}

function redibujar()
{
    papel.drawImage(fondo.imagen, 0, 0);
    for(var v=0; v < cantidadVacas; v++)
    {
        papel.drawImage(vaca.imagen, posVacas.vacasX[v], posVacas.vacasY[v]);
    }
    for(var p=0; p < cantidadPollos; p++)
    {
        papel.drawImage(pollo.imagen, posPollos.pollosX[p], posPollos.pollosY[p]);
    }
    for(var c=0; c < cantidadCerdos; c++)
    {
        papel.drawImage(cerdo.imagen, posCerdos.cerdosX[c], posCerdos.cerdosY[c]);
    }
    papel.drawImage(cebra.imagen, xCebra, yCebra);
}

function dibujarCebra(evento) //los eventos no requieren parámetros, son opcionales
{
    //if(evento.keyCode == teclas.UP)
    //{
      //  console.log("Vamo pa Arriba!");
    //}
    var movimiento = 10;
    switch(evento.keyCode)
    {
        case teclas.UP:
           if(0 <= yCebra)
           {
            yCebra = yCebra - movimiento;
            redibujar();
           }
        break;
        case teclas.DOWN:
           if(yCebra <= 420)
           {
            yCebra = yCebra + movimiento;
            redibujar();
           }
        break;
        case teclas.LEFT:
            if(xCebra <= 420)
            {
                xCebra = xCebra - movimiento;
                redibujar();
            }
        break;
        case teclas.RIGHT:
            if(0 <= xCebra)
            {
                xCebra = xCebra + movimiento;
                redibujar();
            }
        break;
        default:
            console.log("otra tecla");
        break;
    }
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
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