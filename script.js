const myLibrary = [];

function Book(title, author, numPages, read) {
    this.title = title
    this.author = author
    this.pages = numPages
    this.read = read
    this.id = crypto.randomUUID()
    this.info = function() {
        return ["Title: " + this.title, "Author: " + this.author, "Pages: "+ this.numPages, "Read? " + this.read, "ID: " + this.id]
    }
}

function addBookToLibrary(title, author, numPages, read) {
    myLibrary.push(new Book(title, author, numPages, read))
}

addBookToLibrary("Hari Puttar", "J.K Rahul", 69, true)
addBookToLibrary("Vagabond", "Inoue Takehiko", 500, true)
addBookToLibrary("The Art of War", "Sun Tzu", 273, false);
addBookToLibrary("Chainsaw Man", "Tatsuki Fujimoto", 192, true);
addBookToLibrary("The Subtle Knife", "Philip Pullman", 341, true);
addBookToLibrary("Cooking for Wizards", "Aurélia Beaupommier", 128, false);
addBookToLibrary("Cyberpunk Blues", "Nico Tanaka", 384, true);
addBookToLibrary("The Last Algorithm", "Ada Byron", 210, false);
addBookToLibrary("Moonlit Kingdoms", "Selene Ward", 452, true);



for (let index = 0; index < myLibrary.length; index++) {
    const element = myLibrary[index];
    const book = document.createElement("div")
    book.className = "bookTile"
    container = document.querySelector(".container")
    container.appendChild(book)
    for (let y = 0; y < element.info().length; y++) {
        const info = element.info()[y];
        bookInfo = document.createElement("p")
        bookInfo.textContent = info
        book.appendChild(bookInfo)
    }
}

button = document.querySelector("#submit")

button.addEventListener("click", function (e) {
    
});

