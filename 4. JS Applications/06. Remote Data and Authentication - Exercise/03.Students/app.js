document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const tbody = document.querySelector('#results tbody');
    const url = 'http://localhost:3030/jsonstore/collections/students';

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const firstName = formData.get('firstName').trim();
        const lastName = formData.get('lastName').trim();
        const facultyNumber = formData.get('facultyNumber').trim();
        const grade = formData.get('grade').trim();

        if (firstName === '' || lastName === '' || facultyNumber === '' || grade === '') {
            alert('All fields are required!');
            return;
        }

        const student = {
            firstName,
            lastName,
            facultyNumber,
            grade: Number(grade)
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(student)
            });

            if (!response.ok) {
                throw new Error('Failed to create student');
            }

            form.reset();
            loadStudents();
        } catch (error) {
            console.error(error);
            alert('Error creating student');
        }
    });

    async function loadStudents() {
        tbody.innerHTML = '';

        try {
            const response = await fetch(url);
            const data = await response.json();

            Object.values(data).forEach(student => {
                const tr = document.createElement('tr');

                tr.innerHTML = `
                    <td>${student.firstName}</td>
                    <td>${student.lastName}</td>
                    <td>${student.facultyNumber}</td>
                    <td>${student.grade}</td>
                `;

                tbody.appendChild(tr);
            });
        } catch (error) {
            console.error(error);
            alert('Error loading students');
        }
    }

    loadStudents();
});
