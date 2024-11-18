var quotes = [
    {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    { quote: "So many books, so little time.", author: "Frank Zappa" },
    {
      quote:
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein",
    },
    {
      quote: "A room without books is like a body without a soul.",
      author: "Marcus Tullius Cicero",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi",
    },
    {
      quote:
        "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost",
    },
    {
      quote: "If you tell the truth, you don't have to remember anything.",
      author: "Mark Twain",
    },
    {
      quote: "A friend is someone who knows all about you and still loves you",
      author: "Elbert Hubbard",
    },
    {
      quote:
        "To live is the rarest thing in the world. Most people exist, that is all",
      author: "Oscar Wilde",
    },
    {
      quote:
        "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      author: "Mahatma Gandhi",
    },
    {
      quote: "We accept the love we think we deserve.",
      author: "Stephen Chbosky",
    },
    {
      quote:
        "It is better to be hated for what you are than to be loved for what you are not",
      author: "Andre Gide",
    },
  ];
  
  function createQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];
  
    document.getElementById("quote").innerText = `"${randomQuote.quote}"`;
    document.getElementById("author").innerText = `-- ${randomQuote.author}`;
  }
  