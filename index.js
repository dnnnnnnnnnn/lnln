// Filter Button

const filterbtn = document.getElementById("filterbtn");

filterbtn.addEventListener("click", filtern);
function filtern() {
  let filter = document.getElementById("filter");
  if (filter.style.display == "none") {
    filter.style.display = "block";
  } else {
    filter.style.display = "none";
  }
}

// Filter Close Button

const closebtn = document.getElementById("closebtn");

closebtn.addEventListener("click", closen);
function closen() {
  let filter = document.getElementById("filter");
  if (filter.style.display == "block") {
    filter.style.display = "none";
  } else {
    filter.style.display = "none";
  }
}

// Filter Show Button

const showbtn = document.getElementById("showbtn");

showbtn.addEventListener("click", shown);
function shown() {
  let filter = document.getElementById("filter");
  if (filter.style.display == "block") {
    filter.style.display = "none";
  } else {
    filter.style.display = "none";
  }
}

// Filter Color Button

const colorbtn = document.getElementById("colorbtn");

colorbtn.addEventListener("click", colorn);
function colorn() {
  let color = document.getElementById("color");
  let size = document.getElementById("size");
  let price = document.getElementById("price");
  let sort = document.getElementById("sort");
  let colorbtn = document.getElementById("colorbtn");
  let sizebtn = document.getElementById("sizebtn");
  let sortbtn = document.getElementById("sortbtn");
  let pricebtn = document.getElementById("pricebtn");
  if (color.style.display == "none") {
    color.style.display = "block";
    price.style.display = "none";
    size.style.display = "none";
    sort.style.display = "none";
    colorbtn.innerHTML = "Color (-)";
    sizebtn.innerHTML = "Size";
    pricebtn.innerHTML = "Price";
    sortbtn.innerHTML = "Sort";
  } else {
    color.style.display = "none";
    price.style.display = "none";
    size.style.display = "none";
    sort.style.display = "none";
    colorbtn.innerHTML = "Color";
  }
}

// Filter Size Button

const sizebtn = document.getElementById("sizebtn");

sizebtn.addEventListener("click", sizen);
function sizen() {
  let color = document.getElementById("color");
  let size = document.getElementById("size");
  let price = document.getElementById("price");
  let sort = document.getElementById("sort");
  let sizebtn = document.getElementById("sizebtn");
  let colorbtn = document.getElementById("colorbtn");
  let sortbtn = document.getElementById("sortbtn");
  let pricebtn = document.getElementById("pricebtn");
  if (size.style.display == "none") {
    size.style.display = "block";
    price.style.display = "none";
    color.style.display = "none";
    sort.style.display = "none";
    sizebtn.innerHTML = "Size (-)";
    colorbtn.innerHTML = "Color";
    pricebtn.innerHTML = "Price";
    sortbtn.innerHTML = "Sort";
  } else {
    size.style.display = "none";
    price.style.display = "none";
    color.style.display = "none";
    sort.style.display = "none";
    sizebtn.innerHTML = "Size";
  }
}

// Filter Price Button

const pricebtn = document.getElementById("pricebtn");

pricebtn.addEventListener("click", pricen);
function pricen() {
  let price = document.getElementById("price");
  let color = document.getElementById("color");
  let size = document.getElementById("size");
  let sort = document.getElementById("sort");
  let pricebtn = document.getElementById("pricebtn");
  let sizebtn = document.getElementById("sizebtn");
  let sortbtn = document.getElementById("sortbtn");
  let colorbtn = document.getElementById("colorbtn");
  if (price.style.display == "none") {
    price.style.display = "flex";
    color.style.display = "none";
    size.style.display = "none";
    sort.style.display = "none";
    pricebtn.innerHTML = "Price (-)";
    colorbtn.innerHTML = "Color";
    sizebtn.innerHTML = "Size";
    sortbtn.innerHTML = "Sort By";
  } else {
    price.style.display = "none";
    color.style.display = "none";
    size.style.display = "none";
    sort.style.display = "none";
    pricebtn.innerHTML = "Price";
  }
}

// Filter Sort Button

const sortbtn = document.getElementById("sortbtn");

sortbtn.addEventListener("click", sortn);
function sortn() {
  let sort = document.getElementById("sort");
  let color = document.getElementById("color");
  let size = document.getElementById("size");
  let price = document.getElementById("price");
  let sortbtn = document.getElementById("sortbtn");
  let sizebtn = document.getElementById("sizebtn");
  let colorbtn = document.getElementById("colorbtn");
  let pricebtn = document.getElementById("pricebtn");
  if (sort.style.display == "none") {
    sort.style.display = "block";
    price.style.display = "none";
    size.style.display = "none";
    color.style.display = "none";
    sortbtn.innerHTML = "Sort By (-)";
    colorbtn.innerHTML = "Color";
    sizebtn.innerHTML = "Size";
    pricebtn.innerHTML = "Price";
  } else {
    sort.style.display = "none";
    price.style.display = "none";
    size.style.display = "none";
    color.style.display = "none";
    sortbtn.innerHTML = "Sort By";
  }
}

// Deselect Sort By Checkbox

const btn = document.querySelectorAll('input[name="sort"]');

let checked = null;

btn.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    if (checkbox === checked) {
      checkbox.checked = false;
      checked = null;
    } else {
      checked = checkbox;
    }
  });
});

// Position fixed to .div when .menu is not in viewport

window.addEventListener("scroll", function () {
  const div = document.querySelector(".div");
  const menu = document.querySelector(".menu");

  const menuTopOffset = menu.offsetTop + menu.offsetHeight;

  // check if .menu is in the viewport
  if (window.pageYOffset >= menuTopOffset) {
    div.style.position = "fixed";
    div.style.top = "0"; // fit to the top of the viewport
  } else {
    div.style.position = "absolute";
    div.style.top = "10.29%"; // reset position to top 10%
  }
});

// Prevent Scrolling when .filter is shown

const filter = document.getElementById("filter");
const filterBtn = document.getElementById("filterbtn");
const closeBtn = document.getElementById("closebtn");
const showBtn = document.getElementById("showbtn");

filterBtn.addEventListener("click", function () {
  filter.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", function () {
  filter.style.display = "none";
  document.body.style.overflow = "";
});

showBtn.addEventListener("click", function () {
  filter.style.display = "none";
  document.body.style.overflow = "";
});

// Filter resize .size .color height on .sizebtn on colorbtn click

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");

  function resetHeights() {
    const sizeActive =
      document.querySelector(".size0").style.display === "block";
    const colorActive =
      document.querySelector(".color0").style.display === "block";

    if (sizeActive || colorActive) {
      grid.style.gridTemplateRows = "50% 50%";
    } else {
      grid.style.gridTemplateRows = "20% 80%";
    }
  }

  document.getElementById("sizebtn").addEventListener("click", function () {
    resetHeights();
  });

  document.getElementById("colorbtn").addEventListener("click", function () {
    resetHeights();
  });

  document.getElementById("pricebtn").addEventListener("click", function () {
    resetHeights();
  });

  document.getElementById("sortbtn").addEventListener("click", function () {
    resetHeights();
  });
});

// Filter products by size

document.addEventListener("DOMContentLoaded", function () {
  function filterProducts() {
    const selectedSizes = Array.from(
      document.querySelectorAll('.size input[type="checkbox"]:checked')
    ).map((checkbox) => checkbox.value);
    const products = document.querySelectorAll(".collection .product");

    products.forEach((product) => {
      const productSizes = product
        .querySelector(".product_size p")
        .innerText.split(", ")
        .map((size) => size.trim());
      const isVisible =
        selectedSizes.length === 0 ||
        productSizes.some((size) => selectedSizes.includes(size));
      product.style.display = isVisible ? "block" : "none";
    });
  }

  const sizeCheckboxes = document.querySelectorAll(
    '.size input[type="checkbox"]'
  );
  sizeCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", filterProducts);
  });
});

// Filter products by color

document.addEventListener("DOMContentLoaded", function () {
  // function to filter products by title
  function filterColors() {
    const selectedColors = Array.from(
      document.querySelectorAll('.color input[type="checkbox"]:checked')
    ).map((checkbox) => checkbox.value);
    const products = document.querySelectorAll(".collection .product");

    products.forEach((product) => {
      const productName = product.querySelector(".product-title p").innerText; // get product title
      const isVisible =
        selectedColors.length === 0 ||
        selectedColors.some((color) => productName.includes(color)); // check if selected color is in the product title
      product.style.display = isVisible ? "block" : "none"; // Show or hide product
    });
  }

  const colorCheckboxes = document.querySelectorAll(
    '.color input[type="checkbox"]'
  );
  colorCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", filterColors);
  });
});

// Filter products by price

document.addEventListener("DOMContentLoaded", () => {
  const priceSlider = document.getElementById("slider");
  const showBtn = document.getElementById("showbtn");

  showBtn.addEventListener("click", () => {
    const maxPrice = parseFloat(priceSlider.value);
    const products = document.querySelectorAll(".collection .product");

    products.forEach((product) => {
      const priceText = product.querySelector(".product_price p").innerText;
      const price = parseFloat(priceText);

      if (price <= maxPrice) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

// Wishlist Button

const Wishlistbtn = document.getElementById("wishlistbtn");

Wishlistbtn.addEventListener("click", wishlist);
function wishlist() {
  let wishlist = document.getElementById("wishlist");
  if (wishlist.style.display == "none") {
    wishlist.style.display = "block";
  } else {
    wishlist.style.display = "none";
  }
}

// Close Wishlist Button

const wishClosebtn = document.getElementById("wishClosebtn");

wishClosebtn.addEventListener("click", wishlist);
function wishlist() {
  let wishlist = document.getElementById("wishlist");
  if (wishlist.style.display == "block") {
    wishlist.style.display = "none";
  } else {
    wishlist.style.display = "block";
  }
}

// Wishlist

// Function to initialize the wishlist on page load
function loadWishlistFromStorage() {
  const wishlist = document.querySelector(".wishlist_div");
  const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // Clear current wishlist content
  wishlist.innerHTML = "";

  // Populate wishlist with stored items
  storedWishlist.forEach((productData) => {
    const wishlistProduct = createWishlistProductElement(productData);
    wishlist.appendChild(wishlistProduct);
  });
}

// Add event listener to all wishlist buttons on products
document.querySelectorAll(".product_wishlist").forEach((button) => {
  button.addEventListener("click", (event) => {
    const productElement = event.target.closest(".product"); // Get the closest product container

    // Get product data
    const productData = {
      id: productElement.id,
      img: productElement.querySelector(".pimg").href,
      src: productElement.querySelector(".img").src,
      title: productElement.querySelector(".product_title p a").textContent,
      price: productElement.querySelector(".product_price p").textContent,
      size: productElement.querySelector(".product_size p").textContent,
      qty: 1
    };

    addProductToWishlist(productData);

    event.target.textContent = "In Wishlist";
    event.target.disabled = true;
  });
});

function addProductToWishlist(productData) {
  const wishlist = document.querySelector(".wishlist_div");

  const wishlistProduct = createWishlistProductElement(productData);
  wishlist.appendChild(wishlistProduct);

  const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  storedWishlist.push(productData);
  localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
}

function createWishlistProductElement(productData) {
  const wishlistProduct = document.createElement("div");
  wishlistProduct.classList.add("wishlistProduct");
  wishlistProduct.id = productData.id;

  wishlistProduct.innerHTML = `
        <div id="${productData.id}" class="wishlist_product">
        <a class="wishlist_img" href="${productData.img}">
            <img src="${productData.src}" alt="${productData.title}">
        </a>
        <div class="wishlist_title">
            <p><a href="#">${productData.title}</a></p>
        </div></br>
            <div class="wishlist_size">
            <p>${productData.size}</p>
        </div>
        <div class="wishlist_price">
            <p>${productData.price}</p>
        </div>
        <button class="addbagbtn">Add to Bag</button>
        </div>
    `;

  return wishlistProduct;
}

window.addEventListener("DOMContentLoaded", loadWishlistFromStorage);

// Bag Button

const bagbtn = document.getElementById("bagbtn");

bagbtn.addEventListener("click", bag);
function bag() {
  let bag = document.getElementById("bag");
  if (bag.style.display == "none") {
    bag.style.display = "block";
  } else {
    bag.style.display = "none";
  }
}

// Bag Close Button

const bagClosebtn = document.getElementById("bagClosebtn");

bagClosebtn.addEventListener("click", bag);
function bag() {
  let bag = document.getElementById("bag");
  if (bag.style.display == "block") {
    bag.style.display = "none";
  } else {
    bag.style.display = "block";
  }
}

// bag

function loadWishlistFromStorage() {
  const wishlist = document.querySelector(".wishlist_div");
  const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  wishlist.innerHTML = "";

  storedWishlist.forEach((productData) => {
    const wishlistProduct = createWishlistProductElement(productData);
    wishlist.appendChild(wishlistProduct);
  });
}

function loadBagFromStorage() {
  const bag = document.querySelector(".bag");
  const storedBag = JSON.parse(localStorage.getItem("bag")) || [];

  bag.innerHTML = "";

  storedBag.forEach((productData) => {
    const bagProduct = createBagProductElement(productData);
    bag.appendChild(bagProduct);
  });
}

function addProductToWishlist(productData) {
  const wishlist = document.querySelector(".wishlist");

  const wishlistProduct = createWishlistProductElement(productData);
  wishlist.appendChild(wishlistProduct);

  const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  storedWishlist.push(productData);
  localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
}

function createWishlistProductElement(productData) {
  const wishlistProduct = document.createElement("div");
  wishlistProduct.classList.add("wishlistProduct");
  wishlistProduct.id = productData.id;

  wishlistProduct.innerHTML = `
  <div id="${productData.id}" class="wishlist_product">
        <a class="wishlist_img" href="${productData.img}">
            <img src="${productData.src}" alt="${productData.title}">
        </a>
        <div class="wishlist_title">
            <p><a href="#">${productData.title}</a></p>
        </div></br>
        <div class="wishlist_size">
            <p>${productData.size}</p>
        </div>
        <div class="wishlist_price">
            <p>${productData.price}</p>
        </div>
        <button class="addbagbtn">Add to Bag</button>
        </div>
    `;

  wishlistProduct.querySelector(".addbagbtn").addEventListener("click", () => {
    addProductToBag(productData);
    event.target.textContent = "In Bag";
    removeProductFromWishlist(productData.id);
  });

  return wishlistProduct;
}

function removeProductFromWishlist(productId) {
  document.getElementById(productId).remove();

  const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const updatedWishlist = storedWishlist.filter(
    (product) => product.id !== productId
  );
  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
}

function addProductToBag(productData) {
  const bag = document.querySelector(".bag_div");

  const bagProduct = createBagProductElement(productData);
  bag.appendChild(bagProduct);

  const storedBag = JSON.parse(localStorage.getItem("bag")) || [];
  storedBag.push(productData);
  localStorage.setItem("bag", JSON.stringify(storedBag));
}

function createBagProductElement(productData) {
  const bagProduct = document.createElement("div");
  bagProduct.classList.add("bagProduct");
  bagProduct.id = `bag-${productData.id}`;

  bagProduct.innerHTML = `
    <div id="${productData.id}" class="bag_product">
        <a class="bag_img" href="${productData.img}">
            <img src="${productData.src}" alt="${productData.title}">
        </a>
        <div class="bag_title">
            <p><a href="#">${productData.title}</a></p>
        </div></br>
        <div class="bag_size">
            <p>${productData.size}</p>
        </div></br>
        <div class="bag_qty">
            <p>Qty ${productData.qty}</p>
        </div>
        <div class="bag_price">
            <p>${productData.price}</p>
        </div>
        <button class="removebtn">Remove</button>
        </div>
    `;

  bagProduct.querySelector(".removebtn").addEventListener("click", () => {
    removeProductFromBag(productData.id);
  });

  return bagProduct;
}

function removeProductFromBag(productId) {
  document.getElementById(`bag-${productId}`).remove();

  const storedBag = JSON.parse(localStorage.getItem("bag")) || [];
  const updatedBag = storedBag.filter((product) => product.id !== productId);
  localStorage.setItem("bag", JSON.stringify(updatedBag));
}

window.addEventListener("DOMContentLoaded", () => {
  loadWishlistFromStorage();
  loadBagFromStorage();
});

//

// Function to update the .bagbtn with the number of products in the bag
function updateBagCount() {
  const storedBag = JSON.parse(localStorage.getItem("bag")) || [];
  const bagButton = document.getElementById("bagbtn");
  bagButton.innerHTML = `(${storedBag.length})`;
}

// Call updateBagCount on page load to initialize the count
window.addEventListener("DOMContentLoaded", () => {
  loadWishlistFromStorage();
  loadBagFromStorage();
  updateBagCount(); // Initialize bag count on page load
});

// Modify addProductToBag to call updateBagCount after adding a product to the bag
function addProductToBag(productData) {
  const bagDiv = document.querySelector(".bag_div");

  // Create and add product element to bag div
  const bagProduct = createBagProductElement(productData);
  bagDiv.appendChild(bagProduct);

  // Save to localStorage
  const storedBag = JSON.parse(localStorage.getItem("bag")) || [];
  storedBag.push(productData);
  localStorage.setItem("bag", JSON.stringify(storedBag));

  // Update bag count
  updateBagCount();
}

// Modify removeProductFromBag to call updateBagCount after removing a product from the bag
function removeProductFromBag(productId) {
  // Remove from DOM
  document.getElementById(`bag-${productId}`).remove();

  // Remove from localStorage
  const storedBag = JSON.parse(localStorage.getItem("bag")) || [];
  const updatedBag = storedBag.filter((product) => product.id !== productId);
  localStorage.setItem("bag", JSON.stringify(updatedBag));

  // Update bag count
  updateBagCount();
}
