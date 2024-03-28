// let books = [];

// let num = 0;
// function addBook() {
//     // Clear the booksarray before adding new books
//     booksarray = [];
    
//     const bookName = document.getElementById('bookName').value;
//     const authorName = document.getElementById('authorName').value;
//     const bookDescription = document.getElementById('bookDescription').value;
//     const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
//     if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
//         const book = {
//             name: bookName,
//             authorName: authorName,
//             bookDescription: bookDescription,
//             pagesNumber: pagesNumber
//         };
//         books.push(book);
//         showbooks();
//         clearInputs();
//     } else {
//         alert('Please fill in all fields correctly.');
//     }
// }


// function addBook() {
//     booksarray = [];

//     const bookName = document.getElementById('bookName').value;
//     const authorName = document.getElementById('authorName').value;
//     const bookDescription = document.getElementById('bookDescription').value;
//     const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
//     if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
//         const book = {
//             name: bookName,
//             authorName: authorName,
//             bookDescription: bookDescription,
//             pagesNumber: pagesNumber
//         };
//         books.push(book);
        

//         showbooks();
//         clearInputs();
//     } else {
//         alert('Please fill in all fields correctly.');
//     }
// }


// function showbooks() {
//     const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
// <P><strong>Book Name: </strong>${book.name}</P>
//   <p><strong>Author Name:</strong> ${book.authorName} </p>
//   <p><strong>Book Description:</strong> ${book.bookDescription}</p>
//   <p><strong>No. of Pages:</strong> ${book.pagesNumber} mins</p>`).join('');

  
//   booksarray.push(booksDiv);

//   document.getElementById('books').innerHTML = booksarray

 
// }

//     function clearInputs() {
//         document.getElementById('bookName').value = '';
//         document.getElementById('authorName').value = '';
//         document.getElementById('bookDescription').value = '';
//         document.getElementById('pagesNumber').value = '';}

// function deletebutton(){
//     if (booksarray.length > 0){
//         // Remove the first item from the booksarray array
//         booksarray.shift();
        
//         // Update the display
//         document.getElementById('books').innerHTML = booksarray.join('');
//     } else {
//         console.log('booksarray is already empty');
//     }
// }

let books = [];
let num = 0;
let booksarray = [];
let displayedBooks = []; // Array to store displayed books

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function showbooks() {
    // Clear displayedBooks array before updating
    displayedBooks = [];
    // Push the current state of books into displayedBooks array
    books.forEach(book => displayedBooks.push(book));

    // Display the books
    const booksDiv = displayedBooks.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName} </p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} mins</p>`
    ).join('');

    document.getElementById('books').innerHTML = booksDiv;
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

// function deletebutton() {
//     if (booksarray.length > 0) {
//         booksarray.shift();
//         document.getElementById('books').innerText = booksarray;
//     }
// }

function deletebutton() {
    if (displayedBooks.length > 0) {
        // Remove the first item from the displayedBooks array
        displayedBooks.shift();
        // Update the display
        const booksDiv = displayedBooks.map((book, index) => `<h1>book Number: ${index + 1}</h1>
            <p><strong>Book Name: </strong>${book.name}</p>
            <p><strong>Author Name:</strong> ${book.authorName} </p>
            <p><strong>Book Description:</strong> ${book.bookDescription}</p>
            <p><strong>No. of Pages:</strong> ${book.pagesNumber} mins</p>`
        ).join('');
        document.getElementById('books').innerHTML = booksDiv;
    } else {
        console.log('No books to delete');
    }
}

