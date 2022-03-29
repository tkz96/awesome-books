const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const addBookButton = document.getElementById('addBook');


let listOfBooks = [];

const addBook = (e) => {
    e.preventDefault();
    let book = {
        title: bookTitle.value,
        author: bookAuthor.value
    }
    listOfBooks.push(book);
    document.querySelector('form').reset();
    localStorage.setItem("list of Books", JSON.stringify(listOfBooks));
}

addBookButton.addEventListener('click', addBook);