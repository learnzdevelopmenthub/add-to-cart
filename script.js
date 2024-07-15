const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 }
];

const cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = products.map(product => `
        <div class="product">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = cart.map((product, index) => `
        <div class="cart-item">
            <h4>${product.name}</h4>
            <p>Price: $${product.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        </div>
    `).join('');

    const totalProducts = cart.length;
    const totalAmount = cart.reduce((sum, product) => sum + product.price, 0);

    document.getElementById('total-products').innerText = totalProducts;
    document.getElementById('total-amount').innerText = totalAmount;
}

function removeFromCart(cartIndex) {
    cart.splice(cartIndex, 1);
    displayCart();
}

displayProducts();
