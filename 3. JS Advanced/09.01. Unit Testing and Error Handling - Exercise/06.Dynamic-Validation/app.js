function validate() {
    let emailInput = document.getElementById('email');
    emailInput.addEventListener('change', function () {
        let emailValue = emailInput.value;
        let emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (!emailPattern.test(emailValue)) {
            emailInput.classList.add('error');
        } else {
            emailInput.classList.remove('error');
        }
    });
}
