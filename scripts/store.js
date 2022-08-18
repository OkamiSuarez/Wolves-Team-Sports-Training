const cardDiv = document.getElementById("storeCards");

products.forEach((product) => {
  const div = document.createElement("div");
  div.classList.add(`card`);
  div.innerHTML = `
    
    <div class="card text-center">
        <div class="card-header">
            <h2 class="card-title">${product.name}</h5>
        </div>
        <div class="card-body">
            <img src="${product.img}" class="card-img-top" alt="...">
            <h3 class="card-text">Price: ${product.price}</h3>
            <h5 class="card-text">Brand: ${product.brand}</h5>
            <p class="card-text">Description: ${product.description}</p>
            <a href="${product.video}" target="blank" class="text-info stretched-link" id="esParaTi">Is this product for me?</a>
        </div>
        <div class="card-footer">
            <button type="button" class="btn btn-success" onclick="buyProduct(${product.id})" id="botonDeCompra${product.id}">Buy now</button>
        </div>
</div>

    `;
  cardDiv.appendChild(div);
});

function buyProduct() {
  alert("On future we will work on this part");
}

// // Este es el encargado de renderizar las cards para poder comprar

// function mostrarProductos (){

//     const contenedor = document.getElementById("producto-contenedor");

// };
