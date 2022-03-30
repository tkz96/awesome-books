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
    booksDiv.innerHTML = `
        <ul id="theBooks">List of Books: <br />
        ${generateListOfBooks(listOfBooks)}</ul>
    `;
}

function generateListOfBooks(arr) {
    let items = '';
    for(let i = 0; i < arr.length; i++) {
        //remove the first line later
        items += `
        <li>${i}</li>
        <li>${arr[i].title}</li> <br />
        <li>${arr[i].author}</li> <br />
        <li><button class="removeBtn" onclick="removeBook(${i})">Remove</button></li>
        <hr />
        `;
    }
    return items;
}

function removeBook(i) {
    listOfBooks.splice(i, 1);
    generateListOfBooks(listOfBooks);
}

addBookButton.addEventListener("click", addBook);