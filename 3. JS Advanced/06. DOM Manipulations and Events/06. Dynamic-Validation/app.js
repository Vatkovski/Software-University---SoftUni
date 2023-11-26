function validate() {
    const emailInput = document.getElementById('email');
    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

    emailInput.addEventListener('change', function(event) {
        if (!emailRegex.test(event.target.value)) {
            event.target.classList.add('error');
        } else {
            event.target.classList.remove('error');
        }
    });
}