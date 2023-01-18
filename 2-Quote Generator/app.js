let btn = document.querySelector(".quote-btn");
let quote = document.querySelector(".quote-text");
let author = document.querySelector(".author");
let quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall. ",
    author: "Nelson Mandela",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor. ",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Life is what happens when you're busy making other plans. ",
    author: "John Lennon",
  },
  {
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
  },
  {
    text: "When you reach the end of your rope, tie a knot in it and hang on. ",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin",
  },
  {
    text: "It is during our darkest moments that we must focus to see the light ",
    author: "Aristotle",
  },
  {
    text: "Whoever is happy will make others happy too.  ",
    author: "Anne Frank",
  },
  {
    text: "Many of life's failures are people who did not realize how close they were to success when they gave up.  ",
    author: "Thomas A. Edison",
  },
  {
    text: "Only a life lived for others is a life worthwhile. ",
    author: "Albert Einstein",
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
];

btn.addEventListener("click", () => {
  randomQuote = Math.floor(Math.random() * quotes.length);
  showQuote(randomQuote);
});

const showQuote = (index) => {
  let quoteItem = quotes[index];
  quote.textContent = quoteItem.text;
  author.textContent = quoteItem.author;
};
