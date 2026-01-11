const buttons = document.querySelectorAll('.product-card button');
const cart = document.getElementById('cart');
const cartToggle = document.getElementById('cart-toggle');
const closeCart = document.getElementById('close-cart');
const cartItemsList = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

let cartItems = [];

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.parentElement;
    const name = card.dataset.name;
    const price = parseFloat(card.dataset.price);

    const existing = cartItems.find(item => item.name === name);
    if (existing) {
      existing.qty += 1;
    } else {
      cartItems.push({ name, price, qty: 1 });
    }
    updateCart();
  });
});

cartToggle.addEventListener('click', () => { cart.style.right = '0'; });
closeCart.addEventListener('click', () => { cart.style.right = '-350px'; });

function updateCart() {
  cartItemsList.innerHTML = '';
  let total = 0;
  let count = 0;

  cartItems.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;

    const li = document.createElement('li');
    li.innerHTML = `${item.name} x${item.qty} - $${(item.price*item.qty).toFixed(2)}`;
    cartItemsList.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = count;
}
