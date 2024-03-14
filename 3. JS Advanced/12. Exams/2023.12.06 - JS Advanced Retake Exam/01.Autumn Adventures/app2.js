window.addEventListener('load', solve);

function solve() {
    const timeInput = document.getElementById('time');
    const dateInput = document.getElementById('date');
    const placeInput = document.getElementById('place');
    const eventNameInput = document.getElementById('event-name');
    const emailInput = document.getElementById('email');
    const addBtn = document.getElementById('add-btn');
    const checkList = document.getElementById('check-list');
    const upcomingList = document.getElementById('upcoming-list');
    const finishedList = document.getElementById('finished-list');
    const clearBtn = document.getElementById('clear');

    addBtn.addEventListener('click', function () {
        if (timeInput.value && dateInput.value && placeInput.value && eventNameInput.value && emailInput.value) {
            const li = document.createElement('li');
            li.innerHTML = `<article>
                                <p>Begins: ${dateInput.value} at: ${timeInput.value}</p>
                                <p>In: ${placeInput.value}</p>
                                <p>Event: ${eventNameInput.value}</p>
                                <p>Contact: ${emailInput.value}</p>
                            </article>
                            <button class="edit-btn">Edit</button>
                            <button class="continue-btn">Continue</button>`;
            checkList.appendChild(li);

            timeInput.value = '';
            dateInput.value = '';
            placeInput.value = '';
            eventNameInput.value = '';
            emailInput.value = '';

            addBtn.disabled = true;

            const editBtn = li.querySelector('.edit-btn');
            const continueBtn = li.querySelector('.continue-btn');

            editBtn.addEventListener('click', function () {
                timeInput.value = li.querySelector('p:nth-child(1)').textContent.split(': ')[2];
                dateInput.value = li.querySelector('p:nth-child(1)').textContent.split(': ')[1].split(' at')[0];
                placeInput.value = li.querySelector('p:nth-child(2)').textContent.split(': ')[1];
                eventNameInput.value = li.querySelector('p:nth-child(3)').textContent.split(': ')[1];
                emailInput.value = li.querySelector('p:nth-child(4)').textContent.split(': ')[1];

                li.remove();
                addBtn.disabled = false;
            });

            continueBtn.addEventListener('click', function () {
                const liUpcoming = document.createElement('li');
                liUpcoming.className = 'event-content';
                liUpcoming.innerHTML = `<article>
                                            <p>Begins: ${li.querySelector('p:nth-child(1)').textContent.split(': ')[2]}</p>
                                            <p>In: ${li.querySelector('p:nth-child(2)').textContent.split(': ')[1]}</p>
                                            <p>Event: ${li.querySelector('p:nth-child(3)').textContent.split(': ')[1]}</p>
                                            <p>Contact: ${li.querySelector('p:nth-child(4)').textContent.split(': ')[1]}</p>
                                        </article>
                                        <button class="finished-btn">Move to Finished</button>`;
                upcomingList.appendChild(liUpcoming);

                li.remove();
                addBtn.disabled = false;

                const finishedBtn = liUpcoming.querySelector('.finished-btn');

                finishedBtn.addEventListener('click', function () {
                    const liFinished = document.createElement('li');
                    liFinished.className = 'event-content';
                    liFinished.innerHTML = `<article>
                                                <p>Begins: ${liUpcoming.querySelector('p:nth-child(1)').textContent.split(': ')[1]}</p>
                                                <p>In: ${liUpcoming.querySelector('p:nth-child(2)').textContent.split(': ')[1]}</p>
                                                <p>Event: ${liUpcoming.querySelector('p:nth-child(3)').textContent.split(': ')[1]}</p>
                                                <p>Contact: ${liUpcoming.querySelector('p:nth-child(4)').textContent.split(': ')[1]}</p>
                                            </article>`;
                    finishedList.appendChild(liFinished);

                    liUpcoming.remove();
                });
            });
        }
    });

    clearBtn.addEventListener('click', function () {
        Array.from(finishedList.children).forEach(li => li.remove());
    });
}
