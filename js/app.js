// ======================================
// CIVILHUB
// APP.JS
// ======================================

const productos = [

{
id:1,
nombre:"PLANTILLAS EXCEL + Plantillas Mathcad",
categoria:"plantillas",
precio:20.00,
imagen:"metrados.jpg",
archivo:"archivos/metrados/Metrados.Excel.xlsx",
descripcion:"mas de 100 Plantillas de metrados, materiales, estructurales,todas profesionales .",
incluye:[
"Archivo Excel editable",
"Fórmulas automáticas",
"Formato profesional",
"Compatible con Excel 2016 o superior"
],
ventas:253,
calificacion:5
},

{
id:2,
nombre:"Bloques AutoCAD + Planos de diferentes especialidades",
categoria:"AutoCAD",
precio:10.00,
imagen:"autocad.jpg",
archivo:"archivos/autocad/Bloques_Autocad.zip",
descripcion:"Colección profesional de bloques AutoCAD para proyectos y planos completos de proyectos reales.",
incluye:[
"Más de 500 bloques",
"Formato DWG",
"Arquitectura",
"Estructuras",
"Instalaciones",
"Topografía"
],
ventas:412,
calificacion:5
},

{
id:3,
nombre:"plantilla de agua potable Civil 3D",
categoria:"Civil 3D",
precio:15.00,
imagen:"civil3d.jpg",
archivo:"archivos/civil3d/Civil3D_Profesional.zip",
descripcion:"Material completo para proyectos desarrollados en Civil 3D, plantillas de agua y alcantarillado + plantilla de carreteras.",
incluye:[
"Superficies",
"Perfiles",
"Corredores",
"Alineamientos",
"Proyectos editables"
],
ventas:186,
calificacion:5
},

{
id:4,
nombre:"Expedientes Técnicos completos + 100 LIBROS DE ING. CIVL",
categoria:"Documentos",
precio:10.00,
imagen:"expediente.jpg",
archivo:"archivos/expediente/Expediente_Tecnico.zip",
descripcion:"Expediente técnico profesional totalmente editable + 100 libros de Ing. Civil de todas las especialidades.",
incluye:[
"Memoria descriptiva",
"Especificaciones técnicas",
"Metrados",
"Presupuesto",
"Cronograma",
"+100 libros de ingenieria civil, analisis y diseño estructural, concreto armado, construccion civil, cimentaciones, ing. de caminos, geologia,resistencia de materiales,etc"
],
ventas:98,
calificacion:5
}


];

//=====================================
// MOSTRAR PRODUCTOS
//=====================================

function mostrarProductos(lista = productos){

const contenedor = document.getElementById("productos");

if(!contenedor) return;

contenedor.innerHTML="";

lista.forEach(producto=>{

contenedor.innerHTML += `

<div class="card">

<span class="etiqueta">
🔥 Más vendido
</span>

<div class="producto-imagen">

<img src="img/${producto.imagen}" alt="${producto.nombre}">

</div>

<h4>${producto.nombre}</h4>

<div class="estrellas">
⭐⭐⭐⭐⭐
</div>

<p>${producto.descripcion}</p>

<div class="precio">
S/${producto.precio.toFixed(2)}
</div>

<div class="botones">

<a href="producto.html?id=${producto.id}" class="btn-detalle">

👁 Ver detalles

</a>

<button onclick="comprarProducto('${producto.nombre}',${producto.precio})">

💚 Comprar

</button>

</div>

</div>

`;

});

}

//=====================================
// BUSCADOR
//=====================================

function buscarProductos(){

const buscador=document.getElementById("buscador");

if(!buscador) return;

const texto=buscador.value.toLowerCase();

const resultado=productos.filter(producto=>

producto.nombre.toLowerCase().includes(texto) ||

producto.categoria.toLowerCase().includes(texto)

);

mostrarProductos(resultado);

}

//=====================================
// WHATSAPP
//=====================================

function comprarProducto(nombre,precio){

const numero="51961080576";

const mensaje=

`Hola CIVILHUB 👋

Quiero comprar:

📚 ${nombre}

💰 Precio: S/${precio.toFixed(2)}

¿Está disponible?`;

const url="https://wa.me/"+numero+"?text="+encodeURIComponent(mensaje);

window.open(url,"_blank");

}
//=====================================
// DETALLE DEL PRODUCTO
//=====================================

function cargarProductoDetalle(){

const parametros = new URLSearchParams(window.location.search);

const id = parseInt(parametros.get("id"));

if(!id) return;

const producto = productos.find(p => p.id === id);

if(!producto){

document.body.innerHTML = "<h2 style='text-align:center;margin-top:50px'>Producto no encontrado</h2>";

return;

}

const imagen = document.getElementById("imagenProducto");
const nombre = document.getElementById("nombreProducto");
const precio = document.getElementById("precioProducto");
const descripcion = document.getElementById("descripcionProducto");
const lista = document.getElementById("incluyeProducto");
const boton = document.getElementById("btnComprar");

if(imagen){
imagen.src = "img/" + producto.imagen;
imagen.alt = producto.nombre;
}

if(nombre){
nombre.textContent = producto.nombre;
}

if(precio){
precio.textContent = "S/ " + producto.precio.toFixed(2);
}

if(descripcion){
descripcion.textContent = producto.descripcion;
}

if(lista){

lista.innerHTML="";

producto.incluye.forEach(item=>{

const li=document.createElement("li");

li.textContent="✔ " + item;

lista.appendChild(li);

});

}

if(boton){

boton.onclick=function(){

comprarProducto(producto.nombre,producto.precio);

};

}

}

//=====================================
// INICIAR PAGINA
//=====================================

document.addEventListener("DOMContentLoaded",function(){

if(document.getElementById("productos")){

mostrarProductos();

}

if(document.getElementById("buscador")){

document.getElementById("buscador")
.addEventListener("keyup",buscarProductos);

}

if(document.getElementById("nombreProducto")){

cargarProductoDetalle();

}

});