window.addEventListener('load', solve);

function solve() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const peopleCount = document.getElementById('people-count');
    const fromDate = document.getElementById('from-date');
    const daysCount = document.getElementById('days-count');
    const nextBtn = document.getElementById('next-btn');
    const ticketInfoList = document.querySelector('.ticket-info-list');
    const confirmTicket = document.querySelector('.confirm-ticket');
    const main = document.getElementById('main');
    const body = document.getElementById('body');

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (!firstName.value || !lastName.value || !peopleCount.value || !fromDate.value || !daysCount.value) {
            return;
        }

        const li = document.createElement('li');
        li.className = 'ticket';
        li.innerHTML = `
            <article>
                <h3>Name: ${firstName.value} ${lastName.value}</h3>
                <p>From date: ${fromDate.value}</p>
                <p>For ${daysCount.value} days</p>
                <p>For ${peopleCount.value} people</p>
            </article>
            <button class="edit-btn">Edit</button>
            <button class="continue-btn">Continue</button>
        `;
        ticketInfoList.appendChild(li);

        firstName.value = '';
        lastName.value = '';
        peopleCount.value = '';
        fromDate.value = '';
        daysCount.value = '';

        nextBtn.disabled = true;

        const editBtn = li.querySelector('.edit-btn');
        const continueBtn = li.querySelector('.continue-btn');

        editBtn.addEventListener('click', () => {
            firstName.value = li.querySelector('h3').textContent.split(': ')[1];
            lastName.value = firstName.value.split(' ')[1];
            firstName.value = firstName.value.split(' ')[0];
            fromDate.value = li.querySelectorAll('p')[0].textContent.split(': ')[1];
            daysCount.value = li.querySelectorAll('p')[1].textContent.split(' ')[1];
            peopleCount.value = li.querySelectorAll('p')[2].textContent.split(' ')[1];

            nextBtn.disabled = false;

            li.remove();
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

            confirmTicket.appendChild(li);

            confirmBtn.addEventListener('click', () => {
                main.remove();

                const h1 = document.createElement('h1');
                h1.id = 'thank-you';
                h1.textContent = 'Thank you, have a nice day!';
                body.appendChild(h1);

                const backBtn = document.createElement('button');
                backBtn.id = 'back-btn';
                backBtn.textContent = 'Back';
                body.appendChild(backBtn);

                backBtn.addEventListener('click', () => {
                    location.reload();
                });
            });

            cancelBtn.addEventListener('click', () => {
                li.remove();
                nextBtn.disabled = false;
            });
        });
    });
}
