function toggle() {
    const buttonSpan = document.querySelector(".button");
    const divWrapperText = document.querySelector("#extra");

    buttonSpan.textContent = buttonSpan.textContent === "More" ? "Less" : "More";

    divWrapperText.style.display =
        divWrapperText.style.display === "none" || divWrapperText.style.display === "" ? "block" : "none";
}