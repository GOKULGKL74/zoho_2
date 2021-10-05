const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 5000

let books = [{"fname":"gokul",
"lname":"g",
"email":"gokulganesh74200@gmail.com",
"number":"989898981"
}];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    const book = req.body;

    // output the book to the console for debugging
    console.log(book);

      var d = new Date();
      var n = d.getTime().toString();
      book["id"]=n;
      // Outp the book to the console for debugging
      console.log(book);

    books.push(book);

});

app.get('/book', (req, res) => {
    res.json(books);
});

app.get('/book/:id', (req, res) => {
    // reading id from the URL
    const id = req.params.id;

    // searching books for the id
    for (let book of books) {
        if (book.id === id) {
            res.json(book);
            return;
        }
    }

    // sending 404 when not found something is a good practice
    res.status(404).send('Book not found');
});

app.delete('/book/:id', (req, res) => {
    // reading id from the URL
    const id = req.params.id;

    // remove item from the books array
    books = books.filter(i => {
        if (i.id !== id) {
            return true;
        }

        return false;
    });

    // sending 404 when not found something is a good practice
    res.send('Book is deleted');
});

app.post('/book/:id', (req, res) => {
    // reading id from the URL
    const id = req.params.id;
    const newBook = req.body;

    // remove item from the books array
    for (let i = 0; i < books.length; i++) {
        let book = books[i]

        if (book.id === id) {
            books[i] = newBook;
        }
    }

    // sending 404 when not found something is a good practice
    res.send('Book is edited');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
