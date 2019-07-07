const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
const priceTag = document.querySelector("h1");
let currency = "USD";

// grab data from coindesk
const checkPrice = function() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      priceTag.innerHTML = data.bpi[currency].rate_float.toFixed(1);
    });
};

checkPrice();

// loop over nav links and add click event
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function() {
    currency = this.getAttribute("data-currency");
    checkPrice();

    navLinks.forEach(link => link.classList.remove("selected"));
    this.classList.add("selected");
  });
});
