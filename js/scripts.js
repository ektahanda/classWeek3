console.log('Is it working?');

//I will make an array with a list of different types of books
var booksArray = ['Sci-fi', 'Thriller', 'Drama', 'Classic'];

//This variable will find the first item in bookArray
var firstBook = booksArray[0];

console.log(firstBook);

//I will make an if... else... conditional that will test to see
//if the first item in my booksArray is Thriler
//We will also test if the second book is Romance
if (firstBook == 'Thriller') {
  console.log('The first book is a Thriller');
}
else if (booksArray[1] == 'Romance')
console.log('The second book is a Romance');
else {
  console.log('The first book is not a Thriller');
  console.log('Actually, the first book is ' + firstBook);
}
