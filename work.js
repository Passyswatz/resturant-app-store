document.addEventListener("DOMContentLoaded", () => {
    const cartItems = [];
  
    fetch('https://fakestoreapi.com/products/')
      .then(data => data.json())
      .then(fakeData => {
        const menusContainer = document.getElementById('card');
        
        fakeData.forEach(product => {
          const menuItem = document.createElement('div');
          menuItem.classList.add('menus-item');
          menuItem.innerHTML = `
            <img src=${product.image} alt="burger"/>
            <div class="menus-description">
              <h3>${product.title}</h3>
              <p>${product.description}</p>
              <input type="number" />
              <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
            <div class="price">
              <p>${product.price}</p>
            </div>
          `;
          
          const addToCartButton = menuItem.querySelector('.add-to-cart');
          addToCartButton.addEventListener('click', () => {
            const productId = addToCartButton.getAttribute('data-id');
            const selectedProduct = fakeData.find(product => product.id === parseInt(productId));
            cartItems.push(selectedProduct);
            updateCart();
          });
          
          menusContainer.appendChild(menuItem);
        });
      })
      .catch(err => {
        console.log(err);
      });
  
    function updateCart() {
      const cartSidebar = document.getElementById('cart-items');
      cartSidebar.innerHTML = '';
  
      cartItems.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
          ${item.title} - $${item.price}
          <button class="remove-from-cart" data-id="${item.id}">Remove</button>
        `;
  
        const removeFromCartButton = cartItem.querySelector('.remove-from-cart');
        removeFromCartButton.addEventListener('click', () => {
          const itemId = removeFromCartButton.getAttribute('data-id');
          const itemIndex = cartItems.findIndex(item => item.id === parseInt(itemId));
          if (itemIndex !== -1) {
            cartItems.splice(itemIndex, 1);
            updateCart();
          }
        });
  
        cartSidebar.appendChild(cartItem);
      });
    }
  });

  
