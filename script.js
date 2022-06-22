var coll = document.getElementsByClassName("definition-btn");
var i;
let library = document.querySelector(".library-container");
let textTable = document.querySelector("#textbook-table");
let textbooks = document.querySelectorAll("#textbook")

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

let myLibrary = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 324,
    haveRead: "yes"
  }
];

class Book {
  constructor(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    // this.info = function() {
    //   return `${this.title} by ${this.author}. ${this.pages} pages. ${this.haveRead}.`
    // }
  }
}

function addBookToLibrary(title, author, pages, haveRead) {
  let newBook = new Book(title, author, pages, haveRead);
  myLibrary.push(newBook);
  displayBook();
}

function displayBook() {
  
  myLibrary.forEach((element) => {
    let newRow = textTable.insertRow();
    let newCell = newRow.insertCell(0);
    let newCellTwo = newRow.insertCell(1);
    let newText = document.createTextNode(element.title);
    let newTextTwo = document.createTextNode(element.author);
    newCell.appendChild(newText);
    newCellTwo.appendChild(newTextTwo);
  });

}

textbooks.forEach(book => {
  book.addEventListener('click', function() {
    document.body.classList.toggle("blur");
    let zoomDiv = document.createElement("div");
    zoomDiv.classList.add("zoom")
  })});