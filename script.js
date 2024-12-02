let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    document.getElementById('cart-count').textContent = cart.length;
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', total);
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.product} - $${item.price}`;
        cartItems.appendChild(div);
    });
    document.getElementById('total-price').textContent = total;
}

function checkout() {
    alert(`Your total is $${total}. Proceeding to payment.`);
    cart = [];
    total = 0;
    document.getElementById('cart-count').textContent = '0';
    localStorage.removeItem('cart');
    localStorage.removeItem('total');
}

window.onload = function() {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        total = parseFloat(localStorage.getItem('total'));
        updateCart();
    }
};
