/******* Products ********/

const products = [
  {
    id: 1,
    name: `Wonderful Bag`,
    img: `https://picsum.photos/200`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit sed consequat tincidunt lorem sit amet lobortis.`,
    price: `100`,
    qty: 0,
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
  },{
    id: 4,
    name: `Book Cover`,
    img: `https://picsum.photos/200`,
    desc: `Suspendisse eget urna sed nisi dictum bibendum at nec odio. Aenean vitae vehicula metus. Duis finibus sodales erat, ac dapibus metus.`,
    price: `100`,
    qty: 0,
    color: `Black`,
    category: `something`
  },{
    id: 5,
    name: `Cell Phone`,
    img: `https://picsum.photos/200`,
    desc: `Suspendisse eget urna sed nisi dictum bibendum at nec odio. Aenean vitae vehicula metus. Duis finibus sodales erat, ac dapibus metus.`,
    price: `600`,
    qty: 0,
    color: `Blue`,
    category: `something`
  },{
    id: 6,
    name: `Luxury Jacket`,
    img: `https://picsum.photos/200`,
    desc: `Suspendisse eget urna sed nisi dictum bibendum at nec odio. Aenean vitae vehicula metus. Duis finibus sodales erat, ac dapibus metus.`,
    price: `10`,
    qty: 22,
    color: `Red`,
    category: `something`
  }
]


/************* FUNCTIONS *************/

function getProductsAsHtmlString(product) {

  let soldout = " ";
  if (product.qty < 1){
    soldout = '<small>SOLD OUT!</small>'
  }
  
  return `<article class="product">
            <h3>${product.name} ${soldout}</h3>
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
            <div class="rating">
              <input type="radio" name="star" class="star" id="half" value="0.5"><label for="half" data-value="0.5"></label>
              <input type="radio" name="star" class="star" id="one" value="1.0"><label for="one" data-value="1.0"></label>
              <input type="radio" name="star" class="star" id="oneHalf" value="1.5"><label for="oneHalf" data-value="1.5"></label>
              <input type="radio" name="star" class="star" id="two" value="2.0"><label for="two" data-value="2.0"></label>
              <input type="radio" name="star" class="star" id="twoHalf" value="2.5"><label for="twoHalf" data-value="2.5"></label>
              <input type="radio" name="star" class="star" id="three" value="3.0"><label for="three" data-value="3.0"></label>
              <input type="radio" name="star" class="star" id="threeHalf" value="3.5"><label for="threeHalf" data-value="3.5"></label>
              <input type="radio" name="star" class="star" id="four" value="4.0"><label for="four" data-value="4.0"></label>
              <input type="radio" name="star" class="star" id="fourHalf" value="4.5"><label for="fourHalf" data-value="4.5"></label>
              <input type="radio" name="star" class="star" id="five" value="5.0"><label for="five" data-value="5.0"></label>
            </div>
          </article>`;
}

function renderProducts(arrToRender) {
  const arrOfHtmlProducts = arrToRender.map(getProductsAsHtmlString);
  const strOfHtmlProducts = arrOfHtmlProducts.join('\n');
  document.getElementById('products').innerHTML = strOfHtmlProducts;
}

/************* EXECUTE *************/

renderProducts(products);
