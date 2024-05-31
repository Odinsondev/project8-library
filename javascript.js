//javascript.js version 1 - using object constructor

//object constructor for Book
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//function to toggle read status
Book.prototype.toggleRead = function () {
  if (this.read === 'Read') {
    this.read = 'Not read';
  } else if (this.read === 'Not read') {
    this.read = 'Read';
  } else {
  }
  addBookToLibrary(); //to update the list of books
};

const dune = new Book('Dune', 'Frank Herbert', 658, 'Read');
const duneMessiah = new Book('Dune Messiah', 'Frank Herbert', 337, 'Read');
const childrenOfDune = new Book(
  'Children of Dune',
  'Frank Herbert',
  609,
  'Not read'
);
const godEmperorOfDune = new Book(
  'God Emperor of Dune',
  'Frank Herbert',
  587,
  'Not read'
);
const theHereticsOfDune = new Book(
  'Heretics of Dune',
  'Frank Herbert',
  669,
  'Not read'
);
const chapterhouseDune = new Book(
  'Chapterhouse: Dune',
  'Frank Herbert',
  624,
  'Not read'
);

const myLibrary = [];

myLibrary.push(dune);
myLibrary.push(duneMessiah);
myLibrary.push(childrenOfDune);
myLibrary.push(godEmperorOfDune);
myLibrary.push(theHereticsOfDune);
myLibrary.push(chapterhouseDune);

console.log(myLibrary);

function openModal() {
  const modal = document.getElementById('modal');
  modal.showModal();
}

const addBookButton = document.getElementById('addBook');
addBookButton.addEventListener('click', openModal);

const cancelButton = document.getElementById('cancel');
cancelButton.addEventListener('click', cancelModal);

function cancelModal() {
  modal.close();
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read').checked = false;
}

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', addBookToArray);

function addBookToArray() {
  let ifRead = ''; // read/not read checkbox
  if (document.getElementById('read').checked === true) {
    ifRead = 'Read';
  } else if (document.getElementById('read').checked === false) {
    ifRead = 'Not read';
  } else {
  }

  const title = document.getElementById('title').value; // get data from form
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = ifRead;

  const newBook = new Book(`${title}`, `${author}`, `${pages}`, `${read}`); //create Book object

  console.log(newBook);
  myLibrary.push(newBook); //add new Book object to Array
  console.log(myLibrary);
  modal.close();
  document.getElementById('title').value = ''; //delete form entries when closing modal
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read').checked = false;
  addBookToLibrary();
}

//display Array objects on page
function addBookToLibrary() {
  clearCells(); //clear everything when adding or deleting a book

  //loop through myLibrary Array
  for (let i = 0; i <= myLibrary.length - 1; i++) {
    const cell1 = document.getElementById(`cell${i}1`);
    const cell2 = document.getElementById(`cell${i}2`);
    const cell3 = document.getElementById(`cell${i}3`);
    const cell4 = document.getElementById(`cell${i}4`);
    const cell5 = document.getElementById(`cell${i}5`);
    cell1.textContent = myLibrary[i].title;
    cell2.textContent = myLibrary[i].author;
    cell3.textContent = myLibrary[i].pages;
    cell4.textContent = myLibrary[i].read;

    const deleteButtonTest = document.getElementById(`button${i}`); //test if element exists

    //testing if button already exists before creating new button
    if (deleteButtonTest === null) {
      let newButton = document.createElement('button');
      newButton.textContent = 'Delete';
      newButton.setAttribute('class', 'delete-button');
      newButton.setAttribute('id', `button${i}`);
      cell5.appendChild(newButton);
    } else {
    }

    const readButtonTest = document.getElementById(`read${i}`); //test if element exists

    //testing if button already exists before creating new button
    if (readButtonTest === null) {
      let newButton2 = document.createElement('button');
      newButton2.textContent = 'Read';
      newButton2.setAttribute('class', 'read-button');
      newButton2.setAttribute('id', `read${i}`);
      cell4.appendChild(newButton2);
    } else {
    }
  }
  deleteBook(); //rerun so new 'delete' buttons would function
  readBook();
}
addBookToLibrary();

function deleteBook() {
  for (let i = 0; i <= myLibrary.length - 1; i++) {
    const deleteButton = document.getElementById(`button${i}`);
    deleteButton.addEventListener('click', deleteBookId);

    function deleteBookId() {
      console.log(`test${i}`);
      myLibrary.splice(i, 1);

      console.log(myLibrary);
      console.log(myLibrary.length);

      addBookToLibrary(); //execute to update the list
    }
  }
}

function readBook() {
  for (let i = 0; i <= myLibrary.length - 1; i++) {
    const readButton = document.getElementById(`read${i}`);
    readButton.addEventListener('click', readBookId);

    function readBookId() {
      myLibrary[i].toggleRead();

      addBookToLibrary(); //execute to update the list
    }
  }
}

function clearCells() {
  for (let i = 0; i <= 9; i++) {
    let cellId1 = `cell${i}1`;
    let cellId2 = `cell${i}2`;
    let cellId3 = `cell${i}3`;
    let cellId4 = `cell${i}4`;
    let cellId5 = `cell${i}5`;
    const cell1 = document.getElementById(`${cellId1}`);
    const cell2 = document.getElementById(`${cellId2}`);
    const cell3 = document.getElementById(`${cellId3}`);
    const cell4 = document.getElementById(`${cellId4}`);
    const cell5 = document.getElementById(`${cellId5}`);
    cell1.textContent = '';
    cell2.textContent = '';
    cell3.textContent = '';
    cell4.textContent = '';
    if (cell5.firstChild !== null) {
      cell5.firstChild.remove();
    } else {
    }
  }
}
