const addProduct = () => {
    const nameField = document.getElementById('product-name');
    const priceField = document.getElementById('product-price');
    const name = nameField.value;
    const price = priceField.value;
    nameField.value = '';
    priceField.value = '';
    if (!name || !price) {
        return alert('Please Enter Name and Price!');
    }
    else {
        addToCart(name, price);
        location.reload();
    }
}

const displayFromLocalStorage = () => {
    const cart = getCart();
    for (let [key, value] of Object.entries(cart)) {
        displayField(key, value);
    }
}

const displayField = (name, price) => {
    const ul = document.getElementById('products-in-cart');
    const showName = document.createElement('li');
    const showPrice = document.createElement('li');
    showName.innerText = name;
    showPrice.innerText = price;
    const div = document.createElement('div');
    div.innerHTML =
        `
        ${showName.innerText}: ${showPrice.innerText} taka
    `
    ul.appendChild(div);
}

const getCart = () => {
    const cart = localStorage.getItem('cartMedium');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}

const addToCart = (name, price) => { // add to localStorage
    const cart = getCart();
    cart[name] = price;

    console.log(cart);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cartMedium', cartStringified);
}

const purchased = () => {
    document.getElementById('products-in-cart').textContent = ``;
    localStorage.removeItem('cartMedium');
}

displayFromLocalStorage();