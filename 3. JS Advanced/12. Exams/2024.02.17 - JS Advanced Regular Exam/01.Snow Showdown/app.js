window.addEventListener("load", solve);

function solve() {
  const snowmanForm = document.querySelector('.snowman');
  const addBtn = document.querySelector('.add-btn');
  const snowmanPreview = document.querySelector('.snowman-preview');
  const snowList = document.querySelector('.snow-list');
  const backImg = document.querySelector('#back-img');

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const snowmanName = document.querySelector('#snowman-name').value;
    const snowmanHeight = document.querySelector('#snowman-height').value;
    const location = document.querySelector('#location').value;
    const creatorName = document.querySelector('#creator-name').value;
    const specialAttribute = document.querySelector('#special-attribute').value;

    if (snowmanName && snowmanHeight && location && creatorName && specialAttribute) {
      const li = document.createElement('li');
      li.innerHTML = `
        <article>
          <p>Name: ${snowmanName}</p>
          <p>Height: ${snowmanHeight}</p>
          <p>Location: ${location}</p>
          <p>Creator: ${creatorName}</p>
          <p>Attribute: ${specialAttribute}</p>
        </article>
        <div class="btn-container">
          <button class="edit-btn">Edit</button>
          <button class="next-btn">Next</button>
        </div>
      `;
      snowmanPreview.appendChild(li);

      document.querySelector('#snowman-name').value = '';
      document.querySelector('#snowman-height').value = '';
      document.querySelector('#location').value = '';
      document.querySelector('#creator-name').value = '';
      document.querySelector('#special-attribute').value = '';

      addBtn.disabled = true;

      const editBtn = li.querySelector('.edit-btn');
      const nextBtn = li.querySelector('.next-btn');

      editBtn.addEventListener('click', () => {
        document.querySelector('#snowman-name').value = snowmanName;
        document.querySelector('#snowman-height').value = snowmanHeight;
        document.querySelector('#location').value = location;
        document.querySelector('#creator-name').value = creatorName;
        document.querySelector('#special-attribute').value = specialAttribute;

        li.remove();
        addBtn.disabled = false;
      });

      nextBtn.addEventListener('click', () => {
        li.querySelector('.btn-container').remove();
        snowList.appendChild(li);

        const sendBtn = document.createElement('button');
        sendBtn.textContent = 'Send';
        sendBtn.classList.add('send-btn');
        li.querySelector('article').appendChild(sendBtn);

        sendBtn.addEventListener('click', () => {
          document.querySelector('#hero').remove();
          backImg.hidden = false;

          const backBtn = document.createElement('button');
          backBtn.textContent = 'Back';
          backBtn.classList.add('back-btn');
          document.body.appendChild(backBtn);

          backBtn.addEventListener('click', () => {
            location.reload();
          });
        });
      });
    }
  });
}
