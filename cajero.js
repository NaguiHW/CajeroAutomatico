class Billete
{
    constructor(v,c)
    {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }
}

var imagenes = [];
imagenes["100"] = "100bill.png";
imagenes["50"] = "50bill.png";
imagenes["20"] = "20bill.png";
imagenes["10"] = "10bill.png";
imagenes["5"] = "5bill.png";

var caja = [];
var entregado = [];
caja.push(new Billete(100, 5))
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 15));
caja.push(new Billete(10, 20));
caja.push(new Billete(5, 25));

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var ext = document.getElementById("extraer");
ext.addEventListener("click", entregarDinero);

function entregarDinero()
{
    var dibujado = [];
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            dibujado.push(new Billete(bi.valor, papeles));
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if(dinero > 0)
    {
        alert("No se puede entregar la cantidad asignada.");
    }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                resultado.innerHTML = resultado.innerHTML + e.cantidad + " billete(s) de " + "<br />" + "<img src = " + e.imagen.src + " />" + "<br />";
            }
        }
    }
}