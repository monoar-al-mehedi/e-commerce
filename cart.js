let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let itemHTML = document.querySelector('.pro-container')

let item = [];
iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

const addDataToHTML = () => {
    itemHTML.innerHTML = '';
    if (pro - containe.length > 0) {
        pro - containe.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('pro-containe');
            newProduct.innerHTML = `
            <img src="${item.imgSrc}" alt="">
        <div class="des">
          <span>${item.brand}"</span>
          <h5>"${item.name}"</h5>
          <div class="star">
                ${item.rating}"
          </div>
          <h4>"${item.price}"</h4>
        </div>
        <a href="#">"${item.link}"</i></a>
        `;
            itemHTML.appendChild(newProduct)
        });
    }
}

const intApp = () => {
    // get data from json
    fetch('item.json')
        .then(response => response.json())
        .then(data => {
            listProduct = data;
            addDataToHTML()
        })
}
intApp();