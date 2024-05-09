window.addEventListener('load', solve);

function solve() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const dateIn = document.getElementById('date-in');
    const dateOut = document.getElementById('date-out');
    const peopleCount = document.getElementById('people-count');
    const nextBtn = document.getElementById('next-btn');
    const infoList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');
    const verification = document.getElementById('verification');

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (firstName.value && lastName.value && dateIn.value && dateOut.value && peopleCount.value && dateIn.value < dateOut.value) {
            const li = document.createElement('li');
            li.className = 'reservation-content';
            li.innerHTML = `
                <article>
                    <h3>Name: ${firstName.value} ${lastName.value}</h3>
                    <p>From date: ${dateIn.value}</p> 
                    <p>To date: ${dateOut.value}</p> 
                    <p>For ${peopleCount.value} people</p>
                </article>
                <button class="edit-btn">Edit</button>
                <button class="continue-btn">Continue</button>
            `;
            infoList.appendChild(li);

            firstName.value = '';
            lastName.value = '';
            dateIn.value = '';
            dateOut.value = '';
            peopleCount.value = '';

            const editBtn = li.querySelector('.edit-btn');
            const continueBtn = li.querySelector('.continue-btn');

            editBtn.addEventListener('click', () => {
                firstName.value = li.querySelector('h3').textContent.split(': ')[1];
                lastName.value = li.querySelector('p').textContent.split(': ')[1];
                dateIn.value = li.querySelectorAll('p')[1].textContent.split(': ')[1];
                dateOut.value = li.querySelectorAll('p')[2].textContent.split(': ')[1];
                peopleCount.value = li.querySelectorAll('p')[3].textContent.split(' ')[1];

                infoList.removeChild(li);
            });

            continueBtn.addEventListener('click', () => {
                li.querySelector('.edit-btn').remove();
                li.querySelector('.continue-btn').remove();

                const confirmBtn = document.createElement('button');
                confirmBtn.className = 'confirm-btn';
                confirmBtn.textContent = 'Confirm';
                li.appendChild(confirmBtn);

                const cancelBtn = document.createElement('button');
                cancelBtn.className = 'cancel-btn';
                cancelBtn.textContent = 'Cancel';
                li.appendChild(cancelBtn);

                confirmList.appendChild(li);

                confirmBtn.addEventListener('click', () => {
                    verification.className = 'reservation-confirmed';
                    verification.textContent = 'Confirmed.';
                    confirmList.removeChild(li);
                });

                cancelBtn.addEventListener('click', () => {
                    verification.className = 'reservation-cancelled';
                    verification.textContent = 'Cancelled.';
                    confirmList.removeChild(li);
                });
            });
        }
    });
}
