function editElement(element, match, replacer) {
    let content = element.textContent;
    let newContent = content.split(match).join(replacer);
    element.textContent = newContent;
}


