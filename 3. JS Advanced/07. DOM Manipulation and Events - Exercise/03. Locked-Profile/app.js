function lockedProfile() {
    const SHOW_MORE = "Show more";
    const HIDE_IT = "Hide it";

    const btnElements = Array.from(document.querySelectorAll("div button"));

    for (const btn of btnElements) {
        btn.addEventListener("click", show);
    }

    function show(e) {        
        const divChildren = Array.from(e.target.parentElement.children);
        const isLocked = divChildren[2].checked;

        if (isLocked) {
            return;
        }

        const hiddenFieldElements = e.target.previousElementSibling;

        if (e.target.textContent == SHOW_MORE) {
            hiddenFieldElements.style.display = "inline";
            e.target.textContent = HIDE_IT;
            return;
        }

        hiddenFieldElements.style.display = "";
        e.target.textContent = SHOW_MORE;      
    }
}