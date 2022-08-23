//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

-----------------------------------------------------------------------------*/
//cspell: enable

function createBookList(books) {
  // TODO your code goes in here, return the ul element
  const bookList_ul = document.createElement('ul');

  books.forEach((book) => {
    const book_li = document.createElement('li');

    const book_p = document.createElement('p');
    book_p.textContent = `${book.title}-${book.author}`;

    const book_img = document.createElement('img');
    book_img.src = book.image;

    bookList_ul.appendChild(book_li);
    book_li.appendChild(book_p);
    book_li.appendChild(book_img);

    if (book.alreadyRead === true) {
      book_li.style.backgroundColor = 'green';
    } else {
      book_li.style.backgroundColor = 'red';
    }

    return book_li;
  });
  return bookList_ul;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
      image: './assets/the_design_of_everyday_things.jpg',
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
      image: './assets/the_most_human_human.jpg',
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
      image: './assets/the_pragmatic_programmer.jpg',
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
