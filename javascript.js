let quotes = [
  'The unexamined life is not worth living. - Socrates',
  'The life of man (in a state of nature) is solitary, poor, nasty, brutish, and short. - Thomas Hobbes',
  'I think therefore I am (\'Cogito, ergo sum\'). - René Descartes',
  'He who thinks great thoughts, often makes great errors. - Martin Heidegger',
  'There is but one truly serious philosophical problem, and that is suicide. - Albert Camus',
  'No man\'s knowledge here can go beyond his experience. - John Locke',
  'This is patently absurd; but whoever wishes to become a philosopher must learn not to be frightened by absurdities. - Bertrand Russell',
  'Life must be understood backward. But it must be lived forward. - Søren Kierkegaard',
  'You can discover more about a person in an hour of play than in a year of conversation. - Plato',
  'Morality is not the doctrine of how we may make ourselves happy, but of how we may make ourselves worthy of happiness. - Immanuel Kant',
  'Man is condemned to be free. - Jean-Paul Sartre',
  'It is one thing to show a man that he is in error, and another to put him in possession of truth. - John Locke',
  'To do as one would be done by, and to love one\'s neighbour as oneself, constitute the ideal perfection of utilitarian morality. - John Stuart Mill'
]
// function is linked from html as a click button. This allows random numbers
// of arrays that are rounded and randomised based on the number of quotes in the
// array.
function newQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    // innerHTML is used to pass the quotes and its random number to the
    // HTML quote element declared as id.
    document.getElementById('quote').innerHTML = quotes[randomNumber];
}
