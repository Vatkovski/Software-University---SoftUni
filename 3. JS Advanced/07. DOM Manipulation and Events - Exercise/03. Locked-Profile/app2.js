function lockedProfile() {
    const buttons = document.querySelectorAll('button');
    console.log(buttons);
    for (const button of buttons) {
        button.addEventListener('click', showMore);
        function showMore(e) {            
            const profile = e.target.parentElement;
            const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
            if (isActive) {
                const info = profile.querySelector('div');
                if (e.target.textContent == 'Show more') {
                    info.style.display = 'block';
                    e.target.textContent = 'Hide it';
                } else {
                    info.style.display = '';
                    e.target.textContent = 'Show more';
                }
            }
        }
    }
} 