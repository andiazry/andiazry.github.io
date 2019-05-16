const quoteTag = document.querySelector("h1");
const authorTag = document.querySelector("p");
const randomTag = document.querySelector("footer img");

let data = [];

const getQuote = function() {
  if (data.length > 0) {
    const randomNumber = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomNumber];
    quoteTag.innerHTML = randomQuote.quote;
    authorTag.innerHTML = randomQuote.author;
  }
};

getQuote();

randomTag.addEventListener("click", function() {
  getQuote();
});
