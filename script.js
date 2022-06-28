const textbooks = document.querySelectorAll('#textbook');
const model = document.querySelectorAll('.model');
const xbtn = document.querySelectorAll('#xbutton');

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener('click', function () {
//     this.classList.toggle('active');
//     const content = this.nextElementSibling;
//     if (content.style.display === 'block') {
//       content.style.display = 'none';
//     } else {
//       content.style.display = 'block';
//     }
//   });
// }

// const myLibrary = [{
//   title: 'To Kill a Mockingbird',
//   author: 'Harper Lee',
//   pages: 324,
//   haveRead: 'yes',
// }];

// class Book {
//   constructor(title, author, pages, haveRead) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.haveRead = haveRead;
//     // this.info = function() {
//     //   return `${this.title} by ${this.author}. ${this.pages} pages. ${this.haveRead}.`
//     // }
//   }
// }

// function addBookToLibrary(title, author, pages, haveRead) {
//   const newBook = new Book(title, author, pages, haveRead);
//   myLibrary.push(newBook);
//   displayBook();
// }

// function displayBook() {
//   myLibrary.forEach((element) => {
//     const newRow = textTable.insertRow();
//     const newCell = newRow.insertCell(0);
//     const newCellTwo = newRow.insertCell(1);
//     const newText = document.createTextNode(element.title);
//     const newTextTwo = document.createTextNode(element.author);
//     newCell.appendChild(newText);
//     newCellTwo.appendChild(newTextTwo);
//   });
// }

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

textbooks.forEach((book) => {
  book.addEventListener('click', () => {
    textbooks.forEach((textbook) => {
      textbook.classList.toggle('blur');
    });
    const bookName = book.dataset.book;
    model.forEach((textbook) => {
      if (textbook.classList.contains(bookName)) {
        textbook.classList.remove('hidden');
      }
    });
  });
});

xbtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    model.forEach((textbook) => {
      textbook.classList.add('hidden');
    });
    textbooks.forEach((book) => {
      book.classList.remove('blur');
    });
  });
});

// document.body.addEventListener("click", function() {
//   model.forEach(textbook => {
//     textbook.classList.add("hidden");
//   })
//   textbooks.forEach(book => {
//     book.classList.remove("blur");
//   })
// })
