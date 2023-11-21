function deleteByEmail() {
    let email = document.getElementsByName("email")[0].value;
    let secondColumn = document.querySelectorAll("#customers tr td:nth-child(2)");

    let found = false;

    for (const cell of secondColumn) {
        if (cell.textContent == email) {
            cell.parentNode.remove();
            found = true;            
        }
    }

    let result = document.getElementById('result');

    result.textContent = found ? 'Deleted.' : 'Not found.';
}