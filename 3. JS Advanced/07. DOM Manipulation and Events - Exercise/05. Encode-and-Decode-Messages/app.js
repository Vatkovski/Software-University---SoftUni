function encodeAndDecodeMessages() {
    // capture buttons
    const [encodeBtn, decodeBtn] = [...document.querySelectorAll("#main button")];
    const textContainers = [...document.querySelectorAll("#main textarea")];

    //attach events
    encodeBtn.addEventListener("click", encodeAndSend);
    decodeBtn.addEventListener("click", decodeAndRead);

    //helper functions
    function transformText(text, cb) {
        return text.split("").map(cb).join("");
    }

    function prevChar(c) {
        return String.fromCharCode(c.charCodeAt(0) - 1);
    }

    function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }

    //on click callbacks
    function encodeAndSend(e) {
        textContainers[1].value = transformText(textContainers[0].value, nextChar);
        textContainers[0].value = "";
    }

    function decodeAndRead(e) {
        textContainers[1].value = transformText(textContainers[1].value, prevChar);
    }
}