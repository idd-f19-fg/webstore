/******* Products ********/

const products = [
  {
    id: 1,
    name: `Wonderful Bag`,
    img: `https://picsum.photos/200`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit sed consequat tincidunt lorem sit amet lobortis.`,
    price: `100`,
    qty: 2,
    color: `Blue`,
    category: `something`
  },{
    id: 2,
    name: `Apple Watch`,
    img: `https://picsum.photos/200`,
    desc: `Maecenas at est non ex faucibus dictum. Donec finibus, sem imperdiet dapibus ullamcorper, lorem justo tiectus non tortor.`,
    price: `200`,
    qty: 100,
    color: `Black`,
    category: `something`
  },{
    id: 3,
    name: `Luxury Jacket`,
    img: `https://picsum.photos/200`,
    desc: `Suspendisse eget urna sed nisi dictum bibendum at nec odio. Aenean vitae vehicula metus. Duis finibus sodales erat, ac dapibus metus.`,
    price: `100`,
    qty: 22,
    color: `Black`,
    category: `something`
  }
]


/************* FUNCTIONS *************/

function getProductsAsHtmlString(product) {

  return `<article class="product">
            <h3>${product.name}</h3>
            <img src="${product.img}" style="padding: 0 30px 10px 0; float: left;">
            <ul>
              <li>Color: <strong>${product.color}</strong></li>
              <li>Description: <strong>${product.desc}</strong></li>
              <li>Price: <strong>${product.price}</strong></li>
              <li>
                Quantity Available: <strong>${product.qty}</strong>
              </li>
              <li>Category of Goods: <strong>${product.category}</strong></li>
            </ul>
          </article>`;
}

function renderProducts(arrToRender) {
  const arrOfHtmlProducts = arrToRender.map(getProductsAsHtmlString);
  const strOfHtmlProducts = arrOfHtmlProducts.join('\n');
  document.getElementById('products').innerHTML = strOfHtmlProducts;
}

/************* EXECUTE *************/

renderProducts(products);
