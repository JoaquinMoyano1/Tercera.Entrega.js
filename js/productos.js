const productos= [
    {
        imagen: "../img/stand-ventas.webp",
        alt: "glitter-standGlitter",
        id: 1, 
        nombre: "Stand de Glitter",
        descripcion: "Contratacion de Stand de Glitter para tus eventos, armalos a medida.", 
        precio: 75000
    },
    {

        imagen: "../img/glitter-azul.webp",
        alt: "glitter-azul",
        id: 2, 
        nombre: "GIVREE AZUL",
        descripcion: "Frasco de 50 mg de Glitter Azul. ¡Podes agregarlos a tu STAND!", 
        precio: 1500
    },
    {
        imagen: "../img/gliter-negro.webp",
        alt: "glitter-negro",
        id: 3, 
        nombre: "GIVREE NEGRO",
        descripcion: "Frasco de 50 mg de Glitter Azul.¡Podes agregarlos a tu STAND!", 
        precio: 1500
    },
    {
        imagen: "../img/glitter-cobre.webp",
        alt: "glitter-cobre",
        id: 4, 
        nombre: "GIVREE COBRE",
        descripcion: "Frasco de 50 mg de Glitter Cobre.¡Podes agregarlos a tu STAND!", 
        precio: 1500
    },
    {
        imagen: "../img/glitter-dorado.webp",
        alt: "glitter-dorado",
        id: 5, 
        nombre: "GLITTER DORADO",
        descripcion: "Frasco de 50 mg de Glitter Dorado.¡Podes agregarlos a tu STAND!", 
        precio: 1500
    },
    {
        imagen: "../img/glitter-tornasolado.webp",
        alt: "glitter-tornasolado",
        id: 6, 
        nombre: "GLITTER TORNASOLADO",
        descripcion: "Frasco de 50 mg de Glitter Tornasolado. ¡Podes agregarlos a tu STAND!", 
        precio: 1500
    },{
        imagen: "../img/glitter-celeste.webp",
        alt: "glitter-celeste",
        id: 7, 
        nombre: "GLITTER CELESTE",
        descripcion: "Frasco de 50 mg de Glitter Celeste. ¡Podes agregarlos a tu STAND!", 
        precio: 1500
    },{
        imagen: "../img/glitter-box.webp",
        alt: "glitterBox",
        id: 8, 
        nombre: "GLITTER BOX",
        descripcion: "Box de Givree, 4u de frascos de Glitter. ¡Podes agregarlo a tu STAND!", 
        precio: 5500
    },{
        imagen: "../img/glitter-pack3.webp",
        alt: "glitter-pack-x3",
        id: 9, 
        nombre: "GLITTER Pack 3u",
        descripcion: "Pack de 3 Glitters Givree de 50mg, colores a eleccion", 
        precio: 4250
    },{
        imagen: "../img/pack-x3-cobre.webp",
        alt: "glitter-cobrex3",
        id: 10, 
        nombre: "GLITTER COBRE Pack 3u",
        descripcion: "Pack de 3 Glitters Givree de 50mg de Glitter Cobre", 
        precio: 4000
    },{
        imagen: "../img/pac-x3-tornasolado.webp",
        alt: "glitter-tornasolado-packx3",
        id: 11, 
        nombre: "GLITTER TORNASOLADO Pack 3u.",
        descripcion: "Pack de 3 Glitters de 50mg de Glitter Tornasolado", 
        precio: 4250
    },{
        imagen: "../img/blister.webp",
        alt: "glitter-blister",
        id: 12, 
        nombre: "BLISTER DE GLITTER",
        descripcion: "Blister de 20mg de Givree para que hagas tus propios apliques", 
        precio: 2000
    },
]

let cartProducts
let cartProductsLS = localStorage.getItem("cartProducts")
if(cartProductsLS) {
    cartProducts = JSON.parse(cartProductsLS)
} else {
    cartProducts = []
}

let addButton = document.querySelectorAll(".productoAgregar")
let productsContainer = document.getElementById("productsContainer")




function renderProductos(productsArray) {
    productsArray.forEach(producto => {
        productsContainer.innerHTML+= `
                            <div class="col-xl-3 col-md-6 col-sm-12">
                                <div class="card imgProd">
                                    <img src=${producto.imagen} class="card-img-top" alt=${producto.alt}>
                                        <div class="card-body">
                                            <h5 class="card-title">${producto.nombre}</h5>
                                            <p class="card-text">${producto.descripcion}</p>
                                            <p>$${producto.precio}</p>
                                            <button class="productoAgregar" id="${producto.id}">Agregar</button>    
                                        </div>
                                </div>
                            </div>
                            `
    })
    addToCartButton ()
} 

renderProductos(productos)

function addToCartButton () {
    addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productId)

            cartProducts.push(selectedProduct)
            console.log(cartProducts)

            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))

            /*libreria toastify para cada producto que se añade al carrito*/ 

            Toastify({
                text: "Producto agregado al carrito",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "linear-gradient(to right, #bdc3c7, #2c3e50)",
                },
                onClick: function () {
                },
            }).showToast();


        };
    });
}


