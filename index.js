


const addBook = document.getElementById('add-book');
const form = document.getElementById('add-book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const booksContainer = document.getElementById('books-container');
const submit = document.getElementById('submit');


addBook.addEventListener('click', () => { 
    form.classList.toggle('hidden');
    if(form.classList.contains('hidden')){
     addBook.textContent = 'Add Book';
    } else {
    addBook.textContent = 'Close';
    }
})

const myLibrary = [
    new myBooks('The Atomic Habits','James Clear','300','Havent Read'),
    new myBooks('Smart Money','Julius Ceasar','1000','Read')
];

function myBooks(title,author,pages,read){
     if(!new.target){
        throw Error('you must use "new" operator to call the constructor');
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.read = read;
}

function addNewBook(title,author,pages,read){
    const book = new myBooks(title,author,pages,read);

    myLibrary.push(book);

    return book;
}


function deleteBook (id) {
    const index = myLibrary.findIndex(book => book.id === id);  
    
    if(index !== -1) { 
        myLibrary.splice(index,1);
    }
    return index;
}

function displayBook() {
    booksContainer.textContent = '';

    myLibrary.forEach( book => { 
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        const titlePara = document.createElement('p');
        titlePara.textContent = (`Title: ${book.title}`);
        const authorPara = document.createElement('p');
        authorPara.textContent =(`Author: ${book.author}`);
        const pagesPara = document.createElement('p');
        pagesPara.textContent = (`Pages: ${book.pages}`);
        const readStatusPara = document.createElement('p');
        readStatusPara.textContent = (`Read Status: ${book.read}`);
        const bookBackground = document.createElement('img');  
        bookBackground.src ="image-Photoroom.png";
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete'
        deleteButton.classList.add('delete-button');

        deleteButton.addEventListener('click', () => {
            deleteBook(book.id);
            displayBook();
        });

        bookCard.append(
            titlePara,
            authorPara,
            pagesPara,
            readStatusPara,
            bookBackground,
            deleteButton
        );
        booksContainer.append(bookCard)
     }) 
    }



    submit.addEventListener('click', (e) => { 
    
    e.preventDefault();
    const readInput = document.querySelector('input[name="read-status"]:checked');
    const book = addNewBook(
        titleInput.value,
        authorInput.value,
        pagesInput.value,
        readInput.value     
    )
    const form = document.getElementById('add-book-form');
    form.reset();
    console.log(myLibrary);
    displayBook();
})



displayBook();


 