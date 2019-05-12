const quoteTag = document.querySelector("h1");
const randomTag = document.querySelector("footer img");

const getQuote = function() {
  quoteTag.innerHTML = "loaded with javascript " + Math.random();
};

getQuote();

randomTag.addEventListener("click", function() {
  getQuote();
});
