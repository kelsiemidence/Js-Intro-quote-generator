var quotes = [
  "Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference. Robert Frost",
  "The world is full of magic things, patiently waiting for our senses to grow sharper. W.B. Yeats",
  "When you have confidence, you can have a lot of fun. And when you have fun, you can do amazing things. Joe Namath",
  "The greatest thing in the world is to know how to belong to oneself. Michel de Montaigne",
  "Never confuse a single defeat with a final defeat. F. Scott Fitzgerald"
]
  
  function newQuote() {
  // alert('hello')
  var randNum = Math.floor(Math.random() * (quotes.length))
  document.getElementById('quoteDisplay').innerHTML = quotes[randNum]
}