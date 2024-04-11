window.addEventListener('load', solve);

function solve() {
        const carModel = document.getElementById('car-model');
        const carYear = document.getElementById('car-year');
        const partName = document.getElementById('part-name');
        const partNumber = document.getElementById('part-number');
        const condition = document.getElementById('condition');
        const nextBtn = document.getElementById('next-btn');
        const infoList = document.querySelector('.info-list');
        const confirmList = document.querySelector('.confirm-list');
        const completeImg = document.getElementById('complete-img');
        const completeText = document.getElementById('complete-text');

        nextBtn.addEventListener('click', (e) => {
                e.preventDefault();

                if (carModel.value && carYear.value && partName.value && partNumber.value && condition.value && carYear.value >= 1980 && carYear.value <= 2023) {
                        const li = document.createElement('li');
                        li.className = 'part-content';
                        li.innerHTML = `
                <article>
                    <p>Car Model: ${carModel.value}</p>
                    <p>Car Year: ${carYear.value}</p>
                    <p>Part Name: ${partName.value}</p>
                    <p>Part Number: ${partNumber.value}</p>
                    <p>Condition: ${condition.value}</p>
                </article>
                <button class="edit-btn">Edit</button>
                <button class="continue-btn">Continue</button>
            `;
                        infoList.appendChild(li);

                        carModel.value = '';
                        carYear.value = '';
                        partName.value = '';
                        partNumber.value = '';
                        condition.value = '';
                        nextBtn.disabled = true;

                        li.querySelector('.edit-btn').addEventListener('click', () => {
                                carModel.value = li.querySelector('p:nth-child(1)').textContent.split(': ')[1];
                                carYear.value = li.querySelector('p:nth-child(2)').textContent.split(': ')[1];
                                partName.value = li.querySelector('p:nth-child(3)').textContent.split(': ')[1];
                                partNumber.value = li.querySelector('p:nth-child(4)').textContent.split(': ')[1];
                                condition.value = li.querySelector('p:nth-child(5)').textContent.split(': ')[1];
                                nextBtn.disabled = false;
                                infoList.removeChild(li);
                        });

                        li.querySelector('.continue-btn').addEventListener('click', () => {
                                li.querySelector('.edit-btn').remove();
                                li.querySelector('.continue-btn').remove();
                                li.innerHTML += `
                    <button class="confirm-btn">Confirm</button>
                    <button class="cancel-btn">Cancel</button>
                `;
                                confirmList.appendChild(li);

                                li.querySelector('.confirm-btn').addEventListener('click', () => {
                                        confirmList.removeChild(li);
                                        nextBtn.disabled = false;
                                        completeImg.style.visibility = 'visible';
                                        completeText.textContent = 'Part is Ordered!';
                                });

                                li.querySelector('.cancel-btn').addEventListener('click', () => {
                                        confirmList.removeChild(li);
                                        nextBtn.disabled = false;
                                });
                        });
                }
        });
}
