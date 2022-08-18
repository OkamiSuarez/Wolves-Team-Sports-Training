const cardDiv = document.getElementById("storeCards")

products.forEach( product => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML =`<div class="card" style="width: 18rem;">
        <img src="${product.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Product: ${product.name}</h5>
                <p class="card-text">Price: ${product.price}</p>
                <p class="card-text">Brand: ${product.brand}</p>
                <p class="card-text">Description: ${product.description}</p>
                <button type="button" class="botonCard" onclick="buyProduct(${product.id})" id="botonDeCompra${product.id}">Buy now</button>
                <br>
                <a href="${product.video}" target="blank" id="esParaTi">Is this product for me?</a>
            </div>
    </div>`
    cardDiv.appendChild(div);
});

function buyProduct(){
    alert('On future we will work on this part')
}

// // Este es el encargado de renderizar las cards para poder comprar 

// function mostrarProductos (){
    
//     const contenedor = document.getElementById("producto-contenedor");

// };