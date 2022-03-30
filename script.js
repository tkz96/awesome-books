const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const addBookButton = document.getElementById('addBook');

const booksDiv = document.getElementById('booksDiv');

const listOfBooks = [];

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
  document.querySelector('form').reset();
  localStorage.setItem('list of Books', JSON.stringify(listOfBooks));
  booksDiv.innerHTML = `
          <ul id="theBooks">List of Books: <br />
          ${generateListOfBooks(listOfBooks)}</ul>
      `;
}

const addBook = (e) => {
  e.preventDefault();
  const book = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };
  listOfBooks.push(book);
  showBooks();
};

/* eslint-disable no-unused-vars */

function removeBook(i) {
  listOfBooks.splice(i, 1);
  showBooks();
}

/* eslint-enable no-unused-vars */

addBookButton.addEventListener('click', addBook);