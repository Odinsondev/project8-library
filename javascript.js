
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
submitButton.addEventListener('click', addBookToLibrary);

function addBookToLibrary() {
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
}
