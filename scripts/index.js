// Form

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    document.querySelectorAll('input[type="radio"]').forEach((r) => {
      r.style.backgroundColor = r.checked ? "#999999" : "#ffffff";
    });
  });
});

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    const con0 = document.getElementById("con0");
    const con1 = document.getElementById("con1");

    if (this.id === "checkbox0") {
      con0.style.display = "block";
      con1.style.display = "none";
    } else if (this.id === "checkbox1") {
      con0.style.display = "none";
      con1.style.display = "none";
    } else if (this.id === "billingCheckbox0") {
      con1.style.display = "none";
      con0.style.display = "none";
    } else if (this.id === "billingCheckbox1") {
      con0.style.display = "none";
      con1.style.display = "block";
    }
  });
});

// Hide or Show .shipping0 depending on if the postcode input is empty or not

document.getElementById("postcode").addEventListener("input", function () {
  var postcodeInput = this.value;
  var shipping = document.getElementById("shipping");
  var shipping0 = document.getElementById("shipping0");

  if (postcodeInput.trim() != "") {
    shipping.style.display = "none";
    shipping0.style.display = "block";
  } else {
    shipping.style.display = "block";
    shipping0.style.display = "none";
  }
});

// Hide or Show .show on .showbtn click

const showbtn = document.getElementById("showbtn");

showbtn.addEventListener("click", (shown) => {
  let show0 = document.getElementById("show0");
  let showbtn = document.getElementById("showbtn");

  if (show0.style.display == "none") {
    show0.style.display = "block";
    showbtn.innerHTML = "Show order (-)";
  } else {
    show0.style.display = "none";
    showbtn.innerHTML = "Show order";
  }
});

// Discount

const discountbtn = document.getElementById("discountbtn");

discountbtn.addEventListener("click", function () {
  let productPr = document.querySelector(".productPr");
  let productPrice = document.querySelector(".productPrice").innerHTML;
  let discountError = document.querySelector(".discountError");
  let discountDiv = document.querySelector(".discountDiv");
  let productDiscount = document.querySelector(".productDiscount");
  let discountInput = document.getElementById("discount");
  let discount = ((productPrice / 100) * 90).toFixed(2);

  if (discountInput.value === "WELCOME10") {
    productDiscount.innerHTML = "10.00";
    productPr.innerHTML = discount;
    discountDiv.style.display = "flex";
    discountError.style.display = "none";
  } else {
    discountInput.innerHTML = "Discount";
    discountDiv.style.display = "none";
    discountError.style.display = "flex";
  }
});

// Discount0

const discount0btn = document.getElementById("discount0btn");

discount0btn.addEventListener("click", function () {
  let productPr = document.querySelector(".productPr");
  let productPrice = document.querySelector(".productPrice").innerHTML;
  let discountError = document.querySelector(".discount0Error");
  let discountDiv = document.querySelector(".discount0Div");
  let productDiscount = document.querySelector(".productDiscount");
  let discountInput = document.getElementById("discount0");
  let discount = ((productPrice / 100) * 90).toFixed(2);

  if (discountInput.value === "WELCOME10") {
    productDiscount.innerHTML = "10.00";
    productPr.innerHTML = discount;
    discountDiv.style.display = "flex";
    discountError.style.display = "none";
  } else {
    discountInput.innerHTML = "Discount";
    discountDiv.style.display = "none";
    discountError.style.display = "flex";
  }
});

//

const discountRemovebtn = document.getElementById("discountRemovebtn");

discountRemovebtn.addEventListener("click", function () {
  const discountDiv = document.querySelector(".discountDiv");
  const productDiscount = document.querySelector(".productDiscount");
  const productPr = document.querySelector(".productPr");

  if ((discountDiv.style.display = "flex")) {
    discountDiv.style.display = "none";
    productDiscount.innerHTML = "0.00";
    productPr.innerHTML = "100.00";
  } else {
    discountDiv.style.display = "flex";
  }
});

//

const discount0Removebtn = document.getElementById("discount0Removebtn");

discount0Removebtn.addEventListener("click", function () {
  const discount0Div = document.querySelector(".discountDiv");
  const productDiscount0 = document.querySelector(".productDiscount0");
  const productPr0 = document.querySelector(".productPr0");

  if ((discount0Div.style.display = "flex")) {
    discount0Div.style.display = "none";
    productDiscount0.innerHTML = "0.00";
    productPr0.innerHTML = "100.00";
  } else {
    discount0Div.style.display = "flex";
  }
});
  
