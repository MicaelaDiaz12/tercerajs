const producto = [
           { id:1, nombre: "pulseras", precio: 2500,  img: `./imagenes/150ac394319b02bcf7294c2ad092cbb2.jpg` },
           { id:2, nombre: "collares", precio: 4500, img:`./imagenes/93904827b7471cbe93395c28322a186a.jpg` },
           { id:3, nombre: "anillo", precio: 1000, img: `./imagenes/abb7965befb7c85a5c9d765b0f9c0f71.jpg`},
        ];

 let compraCarrito = document.getElementById("compra_carrito");       

let ejecucion = (id) =>{
    let busquedaProducto = producto.find(martes => martes.id === id);
    let productoElegido = []; 
    productoElegido.push(busquedaProducto);
  
   
productoElegido.find(element => {
   let item = document.createElement("div");    
   item.innerHTML =     
            ` <img src="${element.img}">
            <h2 class = nombre> ${element.nombre}</h2>
            <p class= precio> ${element.precio}</p>`;
         
      item.className = "articulos";
  
let boton = document.getElementById("carrito");   
    boton.addEventListener("mouseover", ()=>{
    compraCarrito.append(item);
    compraCarrito.className = "carrito";
    })
  })
 
} 


let productosAVender = document.getElementById("productos")
  producto.forEach((compra) => {
  let objeto = document.createElement("div"); 
   objeto.innerHTML= `
                      <img src="${compra.img}"> 
                      <h2>${compra.nombre}</h2>
                      <h3> $ ${compra.precio} </h3>
                      <button id="elegir${compra.id}">agregar al carrito </button>`;

   
    productosAVender.append(objeto);

    let boton = document.getElementById(`elegir${compra.id}`);
    boton.addEventListener("click",()=> ejecucion(compra.id));
}); 
// ____________________________________________