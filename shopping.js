const addToBagButtons = document.querySelectorAll('.add-to-bag-btn');
const shoppingItems = document.getElementById('shoppingItems');
const totalAmount = document.getElementById('totalAmount');

// Event listener for "Add to Bag" buttons
addToBagButtons.forEach(button => {
  button.addEventListener('click', addToBag);
});

// Function to add item to the shopping bag
function addToBag(event) {
  event.preventDefault();

  // Get the item details from the button's data attributes
  const item = event.target.getAttribute('data-item');
  const price = parseInt(event.target.getAttribute('data-price'));

  // Store item in the local storage
  storeItem(item, price);

  // Show confirmation alert
  alert('Your item has been added to the bag successfully');

  // Update the shopping bag display
  updateShoppingBag();
}

// Function to store item in local storage
function storeItem(item, price) {
  let bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];
  bagItems.push({ item, price });
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
}

// Function to delete item from the shopping bag
function deleteItem(index) {
  let bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];
  if (index >= 0 && index < bagItems.length) {
    bagItems.splice(index, 1);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    updateShoppingBag(); // Update the shopping bag display after deletion
  }
}

// Function to update the shopping bag display
function updateShoppingBag() {
  const bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];
  let total = 0;
  shoppingItems.innerHTML = '';

  bagItems.forEach((item, index) => {
    const row = document.createElement('tr');
    const itemName = document.createElement('td');
    const itemPrice = document.createElement('td');
    const deleteBtn = document.createElement('td');

    itemName.textContent = item.item;
    itemPrice.textContent = `$${item.price}`;
    deleteBtn.innerHTML = '<button class="delete-btn" onclick="deleteItem(' + index + ')">Del</button>';

    row.appendChild(itemName);
    row.appendChild(itemPrice);
    row.appendChild(deleteBtn);
    shoppingItems.appendChild(row);
    total += item.price;
  });

  totalAmount.textContent = `$${total}`;
}

// When the shopping_bag.html page loads, update the shopping bag display.
document.addEventListener('DOMContentLoaded', updateShoppingBag);

// Prevent form submission and store the bag items before leaving the page
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  storeBagItems();
});

// Function to store bag items before leaving the page
function storeBagItems() {
  const bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];
  sessionStorage.setItem('bagItems', JSON.stringify(bagItems));
}

// Function to load bag items when the page is loaded
function loadBagItems() {
  const bagItems = JSON.parse(sessionStorage.getItem('bagItems')) || [];
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  updateShoppingBag();
}

// When the shopping_bag.html page is about to unload, store the bag items
window.addEventListener('beforeunload', function () {
  storeBagItems();
});

// When the shopping_bag.html page loads, load the bag items
document.addEventListener('DOMContentLoaded', loadBagItems);


// ... (existing JavaScript code) ...

// Function to proceed to the payment page
function proceedToPayment() {
  // You can add the desired URL for the payment page here.
  window.location.href = 'payment.html';
}
