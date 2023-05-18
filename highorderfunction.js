// High Order Function
// merupakan fungsi yang dapat menerima fungsi lainnya menjadi argumen, mengembalikan sebuah fungsi, atau keduanya


const sayHello = () => {
    return () => {
        console.log('Hello')
    }
}


const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
  ];
  
const greatAuthors = books.filter(books => books.sales > 1000000)
    .map((books) => `${books.author} adalah penulis buku ${books.title} yang sangat hebat!`)
console.log(greatAuthors)