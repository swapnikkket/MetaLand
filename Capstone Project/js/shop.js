// shop.js

let cart = [];
let totalPrice = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsElement.innerHTML = '';
    totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

function checkout() {
    alert(`Total amount: $${totalPrice.toFixed(2)}. Proceeding to checkout...`);
    // Implement further checkout logic as needed
}
