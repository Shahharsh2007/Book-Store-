var cart = [];
var totalPrice = 0;

function addToCart(bookTitle, price) {
    cart.push({ title: bookTitle, price: price });
    totalPrice += price;

    var cartItems = document.getElementById('cart-items');
    var listItem = document.createElement('li');
    listItem.textContent = bookTitle + ' - ₹' + price;
    cartItems.appendChild(listItem);

    updateTotalPrice();
   
}



function updateTotalPrice() {
    var totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = 'Total: ₹' + totalPrice;
}

function updateTotalPrice() {
    var totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = 'Total: ₹' + totalPrice;
}

function openModal() {
    var modal = document.getElementById('checkout-modal');
    var modalOverlay = document.getElementById('modal-overlay');

    document.getElementById('modal-cart-items').innerHTML = '';
    document.getElementById('modal-total-price').textContent = 'Total: ₹' + totalPrice;

    var customerNameSummary = document.getElementById('customer-name-summary');
    var customerName = document.getElementById('customer-name').value || 'Guest';
    customerNameSummary.textContent = customerName;

    cart.forEach(item => {
        var modalCartItems = document.getElementById('modal-cart-items');
        var billItem = document.createElement('div');
        billItem.className = 'bill-item';
        billItem.innerHTML = `<span>${item.title}</span><span class="${item.price > 0 ? 'green-text' : 'red-text'}">₹${item.price}</span>`;
        modalCartItems.appendChild(billItem);
    });

    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
}

function makePayment() {
    var customerName = document.getElementById('customer-name').value || 'Guest';
    var thankYouScreen = document.getElementById('thank-you-screen');
    var overlayBlur = document.getElementById('modal-overlay'); // Updated to the modal overlay

    // Set the customer name in the thank-you message
    var customerNameThankYou = document.getElementById('customer-name-thankyou');
    customerNameThankYou.textContent = customerName;

    // Close the modal before displaying the thanking note
    var modal = document.getElementById('checkout-modal');
    modal.style.display = 'none';

    // Clear the name input after payment
    document.getElementById('customer-name').value = '';

    // Toggle the display of the overlay and thank-you screen
    overlayBlur.style.display = 'block';
    overlayBlur.classList.add('blur-background'); // Apply blur to the background
    thankYouScreen.style.display = 'block';
}

function reshop() {
    var thankYouScreen = document.getElementById('thank-you-screen');
    var overlayBlur = document.getElementById('modal-overlay'); // Updated to the modal overlay

    // Toggle the display of the overlay and thank-you screen
    overlayBlur.classList.remove('blur-background'); // Remove blur from the background
    overlayBlur.style.display = 'none';
    thankYouScreen.style.display = 'none';

    cart = [];
    totalPrice = 0;
    updateTotalPrice();

    var cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
}