const baseURL = "http://localhost:3030/jsonstore/phonebook";

function attachEvents() {
    document.getElementById("btnLoad").addEventListener("click", loadPhoneBook);
    document.getElementById("phonebook").addEventListener("click", deletePhone);
    document.getElementById("btnCreate").addEventListener("click", createPhone);
}

attachEvents();

async function loadPhoneBook() {
    const response = await fetch(baseURL);
    const data = await response.json();

    const phoneBookElem = document.getElementById("phonebook");
    phoneBookElem.innerHTML = "";

    Object.values(data).forEach((x) => {
        const liElem = document.createElement("li");
        liElem.textContent = `${x.person}: ${x.phone}`;

        const deleteBtnElem = document.createElement("button");
        deleteBtnElem.setAttribute("id", x._id);
        deleteBtnElem.textContent = "Delete";

        liElem.appendChild(deleteBtnElem);

        phoneBookElem.appendChild(liElem);
    });
}

async function deletePhone(e) {
    if (e.target.textContent !== "Delete") {
        return;
    }

    const currentPhoneId = e.target.id;

    await fetch(`${baseURL}/${currentPhoneId}`, {
        method: "Delete",
    });

    loadPhoneBook();
}

async function createPhone() {
    const person = document.getElementById("person").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!person || !phone) {
        alert("Person and Phone fields are required!");
    }

    const requestData = JSON.stringify({
        person,
        phone,
    });

    await fetch(`${baseURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: requestData,
    });

    document.getElementById("person").value = "";
    document.getElementById("phone").value = "";

    loadPhoneBook();
}