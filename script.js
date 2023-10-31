const form = document.querySelector('.hero__form');
const emailInput = document.querySelector('.email');
const submitButton = document.querySelector('.submit-btn');


submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // TODO - ad error icon and message
    if (!emailRegex.test(email)) {
        emailInput.style.borderColor = 'hsl(0, 93%, 68%)';
        emailInput.style.borderWidth = '2px';
        emailInput.style.color = 'hsl(0, 93%, 68%)';
        emailInput.style.backgroundImage = 'url(images/icon-error.svg)';
        emailInput.style.backgroundRepeat = 'no-repeat';
        emailInput.style.backgroundPosition = 'right 120px center';
    } else {
        emailInput.style.borderColor = '';
        emailInput.style.color = '';
        emailInput.style.backgroundImage = '';
    }
});