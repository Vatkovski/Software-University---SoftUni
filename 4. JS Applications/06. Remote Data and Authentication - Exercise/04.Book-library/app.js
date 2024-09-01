document.getElementById('loadBooks').addEventListener('click', loadBooks);
document.querySelector('form').addEventListener('submit', createBook);

async function loadBooks() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books');
    const data = await response.json();

    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    Object.entries(data).forEach(([id, book]) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button onclick="editBook('${id}')">Edit</button>
                <button onclick="deleteBook('${id}')">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

async function createBook(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const title = formData.get('title');
    const author = formData.get('author');

    if (title === '' || author === '') {
        alert('Both fields are required!');
        return;
    }

    const response = await fetch('http://localhost:3030/jsonstore/collections/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author })
    });

    loadBooks();
    event.target.reset();
}

async function editBook(id) {
    const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`);
    const book = await response.json();

    document.querySelector('form').innerHTML = `
        <h3>Edit FORM</h3>
        <label>TITLE</label>
        <input type="text" name="title" value="${book.title}">
        <label>AUTHOR</label>
        <input type="text" name="author" value="${book.author}">
        <button type="button" onclick="saveBook('${id}')">Save</button>
    `;
}

async function saveBook(id) {
    const formData = new FormData(document.querySelector('form'));
    const title = formData.get('title');
    const author = formData.get('author');

    await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author })
    });

    loadBooks();
    document.querySelector('form').innerHTML = `
        <h3>FORM</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <button>Submit</button>
    `;
}

async function deleteBook(id) {
    await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'DELETE'
    });

    loadBooks();
}
