function Books (title,author,pages,read) {
    if(!new.target){
        throw Error('you must use "new" operator to call the constructor');
    }

    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read;
    /* this.info = function () {
        console.log(`${this.title} by ${this.author}, ${this.pages}, ${this.read}`)
    };  
 */
    return
}

Books.prototype.info = function () { 
    console.log(`${this.title} by ${this.author}, ${this.pages}, ${this.read}`)
};

const book1 = new Books('Atomic Habits','James Clear','300', 'finished reading'); 

book1.info();

const book2 = new Books ('The Eyes','Jonathan','500','havent read yet');

book2.info();

console.log(Object.getPrototypeOf(book1) === Books.prototype);
console.log(Object.getPrototypeOf(book2) === Books.prototype);

console.log(Object.getPrototypeOf(book1));



