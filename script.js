const form = document.querySelector('.hero__form');
const emailInput = document.querySelector('.email');
const submitButton = document.querySelector('.submit-btn');
const errorMessage = document.querySelector('.error');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailInput.style.borderColor = 'hsl(0, 93%, 68%)';
        emailInput.style.borderWidth = '2px';
        emailInput.style.backgroundImage = 'url(images/icon-error.svg)';
        emailInput.style.backgroundRepeat = 'no-repeat';
        emailInput.style.backgroundPosition = 'right 120px center';
        errorMessage.style.display = 'block';
    } else {
        emailInput.style.borderColor = '';
        emailInput.style.backgroundImage = '';
        errorMessage.style.display = 'none';
    }
});