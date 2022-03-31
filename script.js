/* eslint-disable no-unused-vars */

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const addBookButton = document.getElementById('addBook');
const booksDiv = document.getElementById('booksDiv');

const listOfBooks = [];

if (localStorage.getItem('list of Books') === null) {
  localStorage.setItem('list of Books', JSON.stringify([]));
}

// eslint-disable-next-line prefer-const
let booksInLS = JSON.parse(localStorage.getItem('list of Books'));

function updateLocalStorage() {
  localStorage.setItem('list of Books', JSON.stringify(booksInLS));
}

function generateListOfBooks(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i += 1) {
    items += `
        <li>${arr[i].title}</li> <br />
        <li>${arr[i].author}</li> <br />
        <li><button class="removeBtn" onclick="removeBook(${i})">Remove</button></li>
        <hr />
        `;
  }
  return items;
}

function showBooks() {
  booksDiv.innerHTML = `
          <ul id="theBooks">List of Books: <br />
          ${generateListOfBooks(booksInLS)}</ul>
      `;
}

function addBook() {
  const book = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };
  booksInLS.push(book);
  updateLocalStorage();
  showBooks();
}

function removeBook(i) {
  booksInLS.splice(i, 1);
  updateLocalStorage();
  showBooks();
}

addBookButton.addEventListener('click', (e) => {
  e.preventDefault();
  addBook();
});

/* eslint-enable no-unused-vars */