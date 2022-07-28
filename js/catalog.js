/* global Product, Cart */
console.log("hello world");
'use strict';
let itemCount = document.getElementById('itemCount');
// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the product options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let option = document.createElement('option');
    option.textContent = Product.allProducts[i].name;
    option.value = Product.allProducts[i].name;
    selectElement.appendChild(option);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();

  // DONE TODO: Prevent the page from reloading

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // Done TODO: suss out the item picked from the select list
  let itemPicked = document.getElementById('items').value;
  let quantityPicked = document.getElementById('quantity').value;
  console.log(itemPicked, quantityPicked);
  cart.addItem(itemPicked, quantityPicked);
  console.log(itemPicked, quantityPicked);
  // DONE TODO: get the quantity
  // DONE TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() { 
  // itemCounter += this.quantityPicked;
  itemCount.textContent = `You have ${cart.items.length} items in your cart.`;
  // let itemCount2 = document.createElement('p');
  // itemCount2.textContent =  `You have ${itemCounter} items in your cart`;
  // itemCount.appendChild(itemCount2);

}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
