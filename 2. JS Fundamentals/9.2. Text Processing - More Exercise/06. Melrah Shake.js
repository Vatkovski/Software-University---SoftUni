function melrahShake(input) {
    let [text, pattern] = input;
    while (true) {
        let firstIndex = text.indexOf(pattern);
        let lastIndex = text.lastIndexOf(pattern);
        if (firstIndex >= 0 && lastIndex >= 0 && firstIndex !== lastIndex && pattern.length > 0) {
            text = text.substring(0, firstIndex) + text.substring(firstIndex + pattern.length, lastIndex) + text.substring(lastIndex + pattern.length);
            pattern = pattern.substring(0, Math.floor(pattern.length / 2)) + pattern.substring(Math.floor(pattern.length / 2) + 1);
            console.log("Shaked it.");
        } else {
            console.log("No shake.");
            console.log(text);
            break;
        }
    }
}

melrahShake(['astalavista baby', 'sta']);
melrahShake(['##mtm!!mm.mm*mtm.#', 'mtm']);
