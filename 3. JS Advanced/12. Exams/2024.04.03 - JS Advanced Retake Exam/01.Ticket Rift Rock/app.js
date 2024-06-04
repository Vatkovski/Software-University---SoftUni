window.addEventListener("load", solve);

function solve() {
    const purchaseBtn = document.getElementById("purchase-btn");
    const numTickets = document.getElementById("num-tickets");
    const seatingPreference = document.getElementById("seating-preference");
    const fullName = document.getElementById("full-name");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById("phone-number");
    const ticketPreview = document.getElementById("ticket-preview");
    const ticketPurchase = document.getElementById("ticket-purchase");

    purchaseBtn.addEventListener("click", () => {
        // Validate input fields
        if (
            !numTickets.value.trim() ||
            !seatingPreference.value.trim() ||
            seatingPreference.value === "seating-preference" ||
            !fullName.value.trim() ||
            !email.value.trim() ||
            !phoneNumber.value.trim()
        ) {
            return;
        }

        // Create list item
        const listItem = document.createElement("li");
        listItem.className = "ticket-purchase";

        const article = document.createElement("article");

        const countP = document.createElement("p");
        countP.textContent = `Count: ${numTickets.value}`;
        article.appendChild(countP);

        const preferenceP = document.createElement("p");
        preferenceP.textContent = `Preference: ${seatingPreference.value}`;
        article.appendChild(preferenceP);

        const toP = document.createElement("p");
        toP.textContent = `To: ${fullName.value}`;
        article.appendChild(toP);

        const emailP = document.createElement("p");
        emailP.textContent = `Email: ${email.value}`;
        article.appendChild(emailP);

        const phoneP = document.createElement("p");
        phoneP.textContent = `Phone Number: ${phoneNumber.value}`;
        article.appendChild(phoneP);

        listItem.appendChild(article);

        const btnContainer = document.createElement("div");
        btnContainer.className = "btn-container";

        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => editTicket(listItem));
        btnContainer.appendChild(editBtn);

        const nextBtn = document.createElement("button");
        nextBtn.className = "next-btn";
        nextBtn.textContent = "Next";
        nextBtn.addEventListener("click", () => nextTicket(listItem));
        btnContainer.appendChild(nextBtn);

        listItem.appendChild(btnContainer);

        ticketPreview.appendChild(listItem);

        // Clear input fields and disable purchase button
        numTickets.value = "";
        seatingPreference.value = "seating-preference";
        fullName.value = "";
        email.value = "";
        phoneNumber.value = "";
        purchaseBtn.disabled = true;
    });

    function editTicket(listItem) {
        const article = listItem.querySelector("article");

        numTickets.value = article.children[0].textContent.split(": ")[1];
        seatingPreference.value = article.children[1].textContent.split(": ")[1];
        fullName.value = article.children[2].textContent.split(": ")[1];
        email.value = article.children[3].textContent.split(": ")[1];
        phoneNumber.value = article.children[4].textContent.split(": ")[1];

        ticketPreview.removeChild(listItem);
        purchaseBtn.disabled = false;
    }

    function nextTicket(listItem) {
        const buyBtn = document.createElement("button");
        buyBtn.className = "buy-btn";
        buyBtn.textContent = "Buy";
        buyBtn.addEventListener("click", () => buyTicket(listItem));

        listItem.querySelector(".btn-container").remove();
        listItem.querySelector("article").appendChild(buyBtn);

        ticketPurchase.appendChild(listItem);
        ticketPreview.innerHTML = "";
    }

    function buyTicket(listItem) {
        ticketPurchase.removeChild(listItem);

        const bottomContent = document.querySelector(".bottom-content");

        const h2 = document.createElement("h2");
        h2.textContent = "Thank you for your purchase!";
        bottomContent.appendChild(h2);

        const backBtn = document.createElement("button");
        backBtn.className = "back-btn";
        backBtn.textContent = "Back";
        backBtn.addEventListener("click", () => {
            bottomContent.removeChild(h2);
            bottomContent.removeChild(backBtn);
            purchaseBtn.disabled = false;
        });
        bottomContent.appendChild(backBtn);
    }
}
