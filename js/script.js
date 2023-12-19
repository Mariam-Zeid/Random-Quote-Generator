"use strict";

const generateBtn = document.querySelector("#generator");

// ! ================== Quotes Objects ==================
// ? Albert Quote
const albert = {
  authorName: "Albert Einstein",
  quote:
    "Two things are infinite: the universe and human stupidity, and I'm not sure about the universe",
};

// ? Marilyn Quote
const marilyn = {
  authorName: "Marilyn Monroe",
  quote:
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
};

// ? Maya Quote
const maya = {
  authorName: "Maya Angelou",
  quote:
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel",
};

// ? Ralph Quote
const ralph = {
  authorName: "Ralph Waldo Emerson",
  quote:
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment",
};

// ? Jackson Quote
const jackson = {
  authorName: "H. Jackson Brown",
  quote:
    "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover",
};

// ! ================== Quotes Array ==================

// ? unreaded quotes
const quotes = [albert, marilyn, maya, ralph, jackson];
// ? readed quotes
let usedQuotes = [];

// ! ================== Generate Random Quote ==================
generateBtn.addEventListener("click", function () {
  if (usedQuotes.length === quotes.length) {
    alert("All quotes have been displayed. Refresh the page to start again.");
    return;
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (usedQuotes.includes(randomIndex));

  const quote = quotes[randomIndex];
  usedQuotes.push(randomIndex);

  const quoteTextElement = document.getElementById("quote");
  quoteTextElement.innerHTML = `${quote.quote}`;

  const quoteAuthorElement = document.getElementById("name");
  quoteAuthorElement.innerHTML = `-- ${quote.authorName}`;
});
