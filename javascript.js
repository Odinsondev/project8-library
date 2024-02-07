
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

function addBookToLibrary() {
  const modal = document.getElementById('modal');
  modal.showModal();

/*   alert("it works");
 */}


const addBookButton = document.getElementById('addBook');
addBookButton.addEventListener('click', addBookToLibrary);

const submitButton = document.getElementById('submit');
/* submitButton.addEventListener('click', function(event) {event.preventDefault()});
 */submitButton.addEventListener('click', test);
function test(event) {
  event.preventDefault()
}

myLibrary.push(dune);
myLibrary.push(duneMessiah);
console.log(myLibrary);

/* const form = document.getElementById('form');
 */let formData = new FormData(form);

console.log(formData);
