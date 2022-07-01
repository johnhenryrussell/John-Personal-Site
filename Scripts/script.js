const defBtn = document.getElementsByClassName('definition-btn');
let i;
const textbooks = document.querySelectorAll('#textbook');
const model = document.querySelectorAll('.model');
const xbtn = document.querySelectorAll('#xbutton');
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dateFunFact = document.querySelector('#text');

// ------------------------Math Page -----------------------------

for (i = 0; i < defBtn.length; i += 1) {
  defBtn[i].addEventListener('click', function dropDown() {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}

fetch(`http://numbersapi.com/${day}/trivia?json`)
  .then((response) => response.json())
  .then((response) => {
    const { text } = response;
    dateFunFact.textContent = `Date: ${monthName[month]} ${day}, ${year}. Fun Fact: ${text}`;
  });

// ------------------ Textbook Page ---------------------

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

//-------------------------------------------------------
