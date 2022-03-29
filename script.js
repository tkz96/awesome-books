const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const addBookButton = document.getElementById("addBook");

const booksDiv = document.getElementById("booksDiv");

let listOfBooks = [];

const addBook = (e) => {
    e.preventDefault();
    let book = {
        title: bookTitle.value,
        author: bookAuthor.value
    }
    listOfBooks.push(book);
    document.querySelector("form").reset();
    localStorage.setItem("list of Books", JSON.stringify(listOfBooks));
}

function generateListOfBooks(arr) {
    let items = '';
    for(let i = 0; i < arr.length; i++) {
        items += `
        <li>${arr[i].title}</li> <br />
        <li>${arr[i].author}</li> <br />
        `;
    }
    return items;
}
if (listOfBooks !== null) {
    booksDiv.innerHTML = `<ul>${generateListOfBooks(listOfBooks)}</ul>`;
}

addBookButton.addEventListener("click", addBook);