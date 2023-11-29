
let cartStorage = localStorage.getItem("cartProducts");
cartStorage = JSON.parse(cartStorage);

let cartContainer = document.getElementById("cartSection");
let totalContainer = document.getElementById("totalSection");

function groupAndCountProducts(cartItems) {
    const productMap = new Map();

    cartItems.forEach(producto => {
        const productId = producto.id;

        if (productMap.has(productId)) {
            const existingProduct = productMap.get(productId);
            existingProduct.quantity += 1;
        } else {
            productMap.set(productId, { ...producto, quantity: 1 });
        }
    });

    return Array.from(productMap.values());
}

function renderCarrito(cartItems) {
    let total = 0;

    cartItems.forEach(producto => {
        const cart = document.createElement("div");
        cart.innerHTML = `
                        <h3>${producto.nombre} x${producto.quantity}</h3>
                          <p>$${producto.precio * producto.quantity}</p>
                          <button class="increment" data-id="${producto.id}">+</button>
                          <button class="decrement" data-id="${producto.id}">-</button>`;
        cartContainer.appendChild(cart);

        total += producto.precio * producto.quantity;
    });

    const totalElement = document.createElement("div");
    totalElement.innerHTML = `<h3>Total:</h3>
                              <p>$${total}</p>`;
    totalContainer.appendChild(totalElement);

    
    const incrementButtons = document.querySelectorAll(".increment");
    const decrementButtons = document.querySelectorAll(".decrement");

    incrementButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productId = parseInt(button.dataset.id);
            updateQuantity(productId, 1);
        });
    });

    decrementButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productId = parseInt(button.dataset.id);
            updateQuantity(productId, -1);
        });
    });
}

function updateQuantity(productId, change) {
    const productIndex = groupedCartItems.findIndex(producto => producto.id === productId);

    if (productIndex !== -1) {
        groupedCartItems[productIndex].quantity += change;

        
        localStorage.setItem("cartProducts", JSON.stringify(groupedCartItems));

        groupedCartItems[productIndex].quantity = Math.max(0, groupedCartItems[productIndex].quantity);
        
        cartContainer.innerHTML = "";
        totalContainer.innerHTML = "";
        renderCarrito(groupedCartItems);
    }
}

const groupedCartItems = groupAndCountProducts(cartStorage);
renderCarrito(groupedCartItems);
