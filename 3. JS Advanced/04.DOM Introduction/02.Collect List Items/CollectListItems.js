function extractText() {
    let listItems = document.querySelectorAll('ul li');
    let textarea = document.getElementById('result');

    for (const listItem of listItems) {
        textarea.value += listItem.textContent
    }
}