const setEditModal = (id) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", `http://localhost:5000/book/${id}`, false);
    xhttp.send();
    const book = JSON.parse(xhttp.responseText);

    const {
       fname,
        lname,
        number,
        email,
    } = book;

    document.getElementById('fname').value = fname;
    document.getElementById('lname').value = lname;
    document.getElementById('number').value = number;
    document.getElementById('email').value = email;

    // setting up the action url for the book
    document.getElementById('editForm').action = `http://localhost:5000/book/${id}`;
}

const deleteBook = (id) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", `http://localhost:5000/book/${id}`, false);
    xhttp.send();

    location.reload();
}

const loadBooks = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:5000/book", false);
    xhttp.send();

    const books = JSON.parse(xhttp.responseText);

    for (let book of books) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">

                        <h6 class="card-subtitle mb-2 text-muted">${book.fname}</h6>

                        <div>lastname: ${book.lname}</div>
                        <div>number: ${book.number}</div>
                        <div>email: ${book.email}</div>

                        <hr>

                        <button type="button" class="btn btn-danger" onClick="deleteBook(${book.id})">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#editBookModal" onClick="setEditModal(${book.id})">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `

        document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + x;
    }
}

loadBooks();
