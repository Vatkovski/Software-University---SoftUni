window.addEventListener("load", solve);

function solve() {
    const gemNameInput = document.getElementById("gem-name");
    const colorInput = document.getElementById("color");
    const caratsInput = document.getElementById("carats");
    const priceInput = document.getElementById("price");
    const typeSelect = document.getElementById("type");
    const addBtn = document.getElementById("add-btn");
    const previewList = document.getElementById("preview-list");
    const collectionList = document.getElementById("collection");

    addBtn.addEventListener("click", () => {
        const gemName = gemNameInput.value.trim();
        const color = colorInput.value.trim();
        const carats = parseFloat(caratsInput.value.trim());
        const price = parseFloat(priceInput.value.trim());
        const type = typeSelect.value.trim();

        if (gemName && color && !isNaN(carats) && !isNaN(price) && type) {
            const listItem = document.createElement("li");
            listItem.classList.add("gem-info");
            const article = document.createElement("article");
            const h4 = document.createElement("h4");
            h4.textContent = gemName;
            article.appendChild(h4);
            const pColor = document.createElement("p");
            pColor.textContent = `Color: ${color}`;
            article.appendChild(pColor);
            const pCarats = document.createElement("p");
            pCarats.textContent = `Carats: ${carats}`;
            article.appendChild(pCarats);
            const pPrice = document.createElement("p");
            pPrice.textContent = `Price: ${price}$`;
            article.appendChild(pPrice);
            const pType = document.createElement("p");
            pType.textContent = `Type: ${type}`;
            article.appendChild(pType);
            listItem.appendChild(article);
            const saveBtn = document.createElement("button");
            saveBtn.classList.add("save-btn");
            saveBtn.textContent = "Save to collection";
            saveBtn.addEventListener("click", () => {
                const collectionItem = document.createElement("li");
                const pItem = document.createElement("p");
                pItem.classList.add("collection-item");
                pItem.textContent = `${gemName} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`;
                collectionItem.appendChild(pItem);
                collectionList.appendChild(collectionItem);
                listItem.remove();
                addBtn.disabled = false;
            });
            listItem.appendChild(saveBtn);
            const editBtn = document.createElement("button");
            editBtn.classList.add("edit-btn");
            editBtn.textContent = "Edit Information";
            editBtn.addEventListener("click", () => {
                gemNameInput.value = gemName;
                colorInput.value = color;
                caratsInput.value = carats;
                priceInput.value = price;
                typeSelect.value = type;
                listItem.remove();
                addBtn.disabled = false;
            });
            listItem.appendChild(editBtn);
            const cancelBtn = document.createElement("button");
            cancelBtn.classList.add("cancel-btn");
            cancelBtn.textContent = "Cancel";
            cancelBtn.addEventListener("click", () => {
                listItem.remove();
                addBtn.disabled = false;
            });
            listItem.appendChild(cancelBtn);
            previewList.appendChild(listItem);
            addBtn.disabled = true;
            gemNameInput.value = "";
            colorInput.value = "";
            caratsInput.value = "";
            priceInput.value = "";
            typeSelect.value = "";
        }
    });
}
