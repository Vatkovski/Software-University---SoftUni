function extract(id) {
    // Get the text from the specified element
    let text = document.getElementById(id).innerText;

    // Use a regular expression to match text within parentheses
    let matches = text.match(/\(([^)]+)\)/g);

    // Remove the parentheses and join the matches with "; "
    let result = matches.map(match => match.slice(1, -1)).join('; ');

    return result;
}
