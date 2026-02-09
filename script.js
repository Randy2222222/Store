
document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartLink = document.getElementById('cartLink');
    if (cartLink) {
        cartLink.textContent = `My Cart (${cart.length})`;
    }
});
