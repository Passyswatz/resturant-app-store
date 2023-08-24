// JavaScript
fetch('https://fakestoreapi.com/products/')
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
