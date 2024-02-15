
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
/*   this.info = function() {
    return(this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read)
  }; */
}

const dune = new Book("Dune", "Frank Herbert", 658, "read");
const duneMessiah = new Book("Dune Messiah", "Frank Herbert", 337, "not read");


const myLibrary = [];

myLibrary.push(dune);
myLibrary.push(duneMessiah);
console.log(myLibrary);


function openModal() {
  const modal = document.getElementById('modal');
  modal.showModal();
}

const addBookButton = document.getElementById('addBook');
addBookButton.addEventListener('click', openModal);


const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', addBookToArray);

function addBookToArray() {
  let newBook = new Book(
    title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    pages = document.getElementById('pages').value,
/*     read = document.getElementById('read').value,
 */  );
  console.log(newBook);
  myLibrary.push(newBook);
  console.log(myLibrary);
  modal.close();
  document.getElementById('title').value =''
  document.getElementById('author').value =''
  document.getElementById('pages').value =''
  addBookToLibrary();
  console.log(read);   //next to figure out
}

function addBookToLibrary() {
  for(let i = 0; i <= myLibrary.length - 1; i++) {   //loop through myLibrary Array
    let cellId1 = `cell${i}1`;
    let cellId2 = `cell${i}2`;
    let cellId3 = `cell${i}3`;
    let cell1 = document.getElementById(`${cellId1}`);
    let cell2 = document.getElementById(`${cellId2}`);
    let cell3 = document.getElementById(`${cellId3}`);
    cell1.textContent = myLibrary[i].title;
    cell2.textContent = myLibrary[i].author;
    cell3.textContent = myLibrary[i].pages;
  }
}

addBookToLibrary();

let read = document.getElementById('read');   //next to figure out
console.log(read);