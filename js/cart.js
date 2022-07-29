/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  showHead();
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}


function showHead(){
  let tHead = document.querySelector('thead');
  let tRow = document.createElement('trow');
    tHead.appendChild(tRow);
    let tData1 = document.createElement('th');
    tData1.textContent = "Product";
    tRow.appendChild(tData1);
    let tData2 = document.createElement('th');
    tData2.textContent = "Quantity";
    tRow.appendChild(tData2);
    let tData3 = document.createElement('th');
    tData3.textContent = "Delete";
    tRow.appendChild(tData3);
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
let tbody = document.querySelector('tbody');
  // TODO: Iterate over the items in the cart
  for (let i=0; i< cart.length; i++){
    let tRow = document.createElement('trow');
    tbody.appendChild(tRow);
    let tData1 = document.createElement('td');
    tData1.textContent = "Product";
    tRow.appendChild(tData1);
    let tData2 = document.createElement('td');
    tData2.textContent = "Quantity";
    tRow.appendChild(tData2);
    let tData3 = document.createElement('td');
    tData3.textContent =  "Delete";
    tRow.appendChild(tData3);

  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();



/// Tried to had a table head

showHead();