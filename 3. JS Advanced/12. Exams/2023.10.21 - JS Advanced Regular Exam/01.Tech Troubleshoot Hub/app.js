window.addEventListener('load', solution);

function solution() {
  const addBtn = document.getElementById('add-btn');
  const employeeInput = document.getElementById('employee');
  const categorySelect = document.getElementById('category');
  const urgencySelect = document.getElementById('urgency');
  const teamSelect = document.getElementById('team');
  const descriptionInput = document.getElementById('description');
  const previewList = document.querySelector('.preview-list');
  const pendingList = document.querySelector('.pending-list');
  const resolvedList = document.querySelector('.resolved-list');

  addBtn.addEventListener('click', () => {
    const employee = employeeInput.value.trim();
    const category = categorySelect.value.trim();
    const urgency = urgencySelect.value.trim();
    const team = teamSelect.value.trim();
    const description = descriptionInput.value.trim();

    if (employee === '' || category === '' || urgency === '' || team === '' || description === '') {
      return; // Do nothing if any field is empty
    }

    const listItem = document.createElement('li');
    listItem.classList.add('problem-content');
    const article = document.createElement('article');
    article.innerHTML = `
      <p>From: ${employee}</p>
      <p>Category: ${category}</p>
      <p>Urgency: ${urgency}</p>
      <p>Assigned to: ${team}</p>
      <p>Description: ${description}</p>
    `;
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';
    const continueBtn = document.createElement('button');
    continueBtn.classList.add('continue-btn');
    continueBtn.textContent = 'Continue';

    listItem.appendChild(article);
    listItem.appendChild(editBtn);
    listItem.appendChild(continueBtn);
    previewList.appendChild(listItem);

    // Clear input fields
    employeeInput.value = '';
    categorySelect.value = '';
    urgencySelect.value = '';
    teamSelect.value = '';
    descriptionInput.value = '';
    addBtn.disabled = true;
  });

  previewList.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit-btn')) {
      const listItem = event.target.parentElement;
      const article = listItem.querySelector('article');
      const paragraphs = article.querySelectorAll('p');

      employeeInput.value = paragraphs[0].textContent.split(': ')[1];
      categorySelect.value = paragraphs[1].textContent.split(': ')[1];
      urgencySelect.value = paragraphs[2].textContent.split(': ')[1];
      teamSelect.value = paragraphs[3].textContent.split(': ')[1];
      descriptionInput.value = paragraphs[4].textContent.split(': ')[1];

      previewList.removeChild(listItem);
      addBtn.disabled = false;
    } else if (event.target.classList.contains('continue-btn')) {
      const listItem = event.target.parentElement;
      const article = listItem.querySelector('article').cloneNode(true);
      const resolveBtn = document.createElement('button');
      resolveBtn.classList.add('resolve-btn');
      resolveBtn.textContent = 'Resolved';
      listItem.innerHTML = '';
      listItem.appendChild(article);
      listItem.appendChild(resolveBtn);
      pendingList.appendChild(listItem);
      previewList.removeChild(listItem);
    }
  });

  pendingList.addEventListener('click', (event) => {
    if (event.target.classList.contains('resolve-btn')) {
      const listItem = event.target.parentElement;
      const article = listItem.querySelector('article').cloneNode(true);
      const clearBtn = document.createElement('button');
      clearBtn.classList.add('clear-btn');
      clearBtn.textContent = 'Clear';
      listItem.innerHTML = '';
      listItem.appendChild(article);
      listItem.appendChild(clearBtn);
      resolvedList.appendChild(listItem);
      pendingList.removeChild(listItem);
    }
  });

  resolvedList.addEventListener('click', (event) => {
    if (event.target.classList.contains('clear-btn')) {
      const listItem = event.target.parentElement;
      resolvedList.removeChild(listItem);
    }
  });
}
