var coll = document.getElementsByClassName("definition-btn");
var i;
let library = document.querySelector(".library");
let textbookImage = document.querySelectorAll(".textbook-image");
let textbooks = document.querySelectorAll("#textbook");
let notThis = document.querySelectorAll("body:not(.no-blur)");
let model = document.querySelectorAll(".model");
let xbtn = document.querySelectorAll("#xbutton")

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

let myLibrary = [{
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  pages: 324,
  haveRead: "yes"
}];

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

// textbooks.forEach(book => {
//   book.addEventListener('click', function () {
//     let hiddenDescription = document.querySelector("#hidden-naive");
//     this.classList.toggle("no-blur");
//     hiddenDescription.classList.toggle("hidden");
//     console.log(this)
//     let notThis = document.querySelectorAll(".library>*:not(.no-blur)");
//     console.log(notThis);
//     notThis.forEach(element => {
//       element.classList.toggle("blur");
//     });
//     this.classList.toggle("item-textbook")
//     this.classList.toggle("textbook-zoom");
//     this.classList.remove("blur")
//   })
// });

textbooks.forEach(book => {
  book.addEventListener('click', function () {
    textbooks.forEach(textbook => {
      textbook.classList.toggle("blur");
    })
    let bookName = book.dataset.book;
    model.forEach(textbook => {
      if (textbook.classList.contains(bookName)) {
        textbook.classList.remove("hidden")
      } else {
        console.log(this)
      }
    })

  })
})

xbtn.forEach(btn => {
  btn.addEventListener('click', function () {
    model.forEach(textbook => {
      textbook.classList.add("hidden");
    })
    textbooks.forEach(book => {
      book.classList.remove("blur");
    })
  })
})

// document.body.addEventListener("click", function() {
//   model.forEach(textbook => {
//     textbook.classList.add("hidden");
//   })
//   textbooks.forEach(book => {
//     book.classList.remove("blur");
//   })
// })