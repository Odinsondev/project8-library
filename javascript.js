
function Book(title, author, pages, read) {   //object constructor for Book
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const dune = new Book("Dune", "Frank Herbert", 658, "read");
const duneMessiah = new Book("Dune Messiah", "Frank Herbert", 337, "not read");

/////////////////////
const test3 = new Book("test3", "test3", 3, "not read");
const test4 = new Book("test4", "test4", 4, "not read");
const test5 = new Book("test5", "test5", 5, "not read");
const test6 = new Book("test6", "test6", 6, "not read");
//////////////////

const myLibrary = [];

myLibrary.push(dune);
myLibrary.push(duneMessiah);

////////////////////////
myLibrary.push(test3);
myLibrary.push(test4);
myLibrary.push(test5);
myLibrary.push(test6);
////////////////////////////

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
  document.getElementById('title').value =''
  document.getElementById('author').value =''
  document.getElementById('pages').value =''
  document.getElementById('read').checked = false
}


const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', addBookToArray);

function addBookToArray() {

  let ifRead = '';   // read/not read checkbox
  if (document.getElementById('read').checked === true) {
    ifRead = 'read';
  } else if (document.getElementById('read').checked === false) {
    ifRead = 'not read';
  } else {}

  const title = document.getElementById('title').value;   // get data from form
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = ifRead;

  const newBook = new Book(`${title}`,`${author}`, `${pages}`, `${read}`);   //create Book object

  console.log(newBook);
  myLibrary.push(newBook);   //add new Book object to Array
  console.log(myLibrary);
  modal.close();
  document.getElementById('title').value =''
  document.getElementById('author').value =''
  document.getElementById('pages').value =''
  document.getElementById('read').checked = false
  addBookToLibrary();
}


function addBookToLibrary() {   //display Array objects on page

  clearCells();   //clear everything when adding or deleting a book

  for(let i = 0; i <= myLibrary.length - 1; i++) {   //loop through myLibrary Array
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
    cell1.textContent = myLibrary[i].title;
    cell2.textContent = myLibrary[i].author;
    cell3.textContent = myLibrary[i].pages;
    cell4.textContent = myLibrary[i].read;

    const deleteButtonTest = document.getElementById(`button${i}`);   //to test if element exists

    if (deleteButtonTest === null) {   //testing if button already exists before creating new button
      let newButton = document.createElement('button');
      newButton.textContent = "Delete";
      newButton.setAttribute('id', `button${i}`);
      cell5.appendChild(newButton);
    } else {}
  }
  deleteBook();   //rerun so new 'delete' buttons would function
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

      addBookToLibrary();
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
    cell1.textContent = "";
    cell2.textContent = "";
    cell3.textContent = "";
    cell4.textContent = "";
    if (cell5.firstChild !== null) {
      cell5.firstChild.remove();
    } else {}
  }
}

//delete button still executing twice in certain situations!!!!!!!!!!!!!!!!!!!