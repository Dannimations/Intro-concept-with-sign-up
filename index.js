const form = document.getElementById('form');
const firstnameInput = document.getElementById('firstnameInput');
const lastnameInput = document.getElementById('lastnameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');

const firstnameError = document.getElementById('firstnameError');
const lastnameError = document.getElementById('lastnameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', (e) => {
    let hasErrors = false;

    // Clear previous error messages
    firstnameError.innerText = '';
    lastnameError.innerText = '';
    emailError.innerText = '';
    passwordError.innerText = '';

    // Validate fields
    if (firstnameInput.value.trim() === '') {
        hasErrors = true;
        firstnameError.innerText = 'First Name cannot be empty';
        firstnameInput.classList.add('incorrect')
    }

    if (lastnameInput.value.trim() === '') {
        hasErrors = true;
        lastnameError.innerText = 'Last Name cannot be empty';
        lastnameInput.classList.add('incorrect')
    }

    if (emailInput.value.trim() === '') {
        hasErrors = true;
        emailError.innerText = 'Looks like this is not an email address';
        emailInput.classList.add('incorrect')
    }

    if (passwordInput.value.trim() === '') {
        hasErrors = true;
        passwordError.innerText = 'Password cannot be empty';
        passwordInput.classList.add('incorrect')
    }

    // Prevent form submission if there are errors
    if (hasErrors) {
        e.preventDefault();
    }
});
