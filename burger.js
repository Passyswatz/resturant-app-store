// JavaScript
fetch('/')
  .then((data) => {
    return data.json();
  })
  .then((fakeData) => {
    let data1 = '';
    fakeData.map((values) => {
      data1 += ` <div class="menus-item" data-item-id="${values.id}">
        <img src=${values.image} alt="product"/>
        <div class="menus-description">
          <h3>${values.title}</h3>
          <p>description goes here</p>
          <input class="item-quantity" type="number" value="0" min="0"/>
          <button class="add-to-cart">add to cart</button>
        </div>
        <div class="price">
          <p>${values.price} usd</p>
        </div>
      </div>`;
    });
    document.getElementById('card').innerHTML = data1;

    // Initialize cart object to store selected items and their quantities
    const cart = {};

    // Get the cart container outside the loop to avoid redefinition
    const cartContainer = document.getElementById('cart-container');

    // Function to update cart display
    const updateCartDisplay = () => {
      // Update the cart sidebar and display selected items
      cartContainer.innerHTML = '';

      let total = 0;

      for (const cartItemId in cart) {
        const cartItemData = cart[cartItemId];
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.setAttribute('data-item-id', cartItemId);
        cartItem.innerHTML = `
          <div class="cart-image">
            <img src="${cartItemData.item.image}" alt="cart-img" class="cart-img"/>
          </div>
          <div class="cart-details">
            <h2>${cartItemData.item.title}</h2>
            <p>${cartItemData.item.price} usd</p>
            <button class="remove-button">remove</button>
          </div>
          <input class="item-quantity" type="number" value="${cartItemData.quantity}" min="1" data-cart-item-id="${cartItemId}"/>
        `;

        cartContainer.appendChild(cartItem);

        // Update the total by adding the price of the current item multiplied by its quantity
        total += cartItemData.item.price * cartItemData.quantity;
      }

      // Calculate and display subtotal
      const subtotalAmount = document.getElementById('subtotal-amount');
      subtotalAmount.textContent = `$${total.toFixed(2)}`;
    };
