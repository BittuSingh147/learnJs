const Shoppingcart = [
  {
    Clothes: "Shirt",
    Price: 799
  },
  {
    Clothes: "t-Shirt",
    Price: 699
  },
  {
    Clothes: "Jeans",
    Price: 1799
  },
  {
    Clothes: "Shoes",
    Price: 999
  }
]
const Totalprice = Shoppingcart.reduce((acc, item) => acc + item.Price, 0)
console.log(Totalprice);


const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, Price: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, Price: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, Price: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, Price: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, Price: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, Price: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, Price: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, Price: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, Price: 1989 },
];

const BookPrice = books.reduce((acc, item) => acc + item.Price, 0)
console.log(BookPrice);