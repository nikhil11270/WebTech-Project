document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('.form form');
    let inputs = document.querySelectorAll('.in');
    let error = document.querySelector('.error');
    let perror = document.querySelector('.perror');
    let password = document.querySelector('#password');

    form.addEventListener('submit', function(event) {
        console.log('Form submitted'); 

        let isError = false;

        inputs.forEach(function(input) {
            if (input.value.trim() === '') {
                isError = true;
            }
        });

        if (password.value.trim().length > 6) {
            perror.innerHTML = 'Password length should not exceed 6 characters';
            isError = true;
        } else {
            perror.innerHTML = '';
        }

        if (isError) {
            error.innerHTML = 'Please fill all the necessary fields';
            event.preventDefault(); 
        } else {
            console.log('Redirecting to Experiment4.html'); 
            window.location.href = 'Experiment4.html';
        }
    });

    inputs.forEach(function(input) {
        input.addEventListener('focus', function() {
            error.innerHTML = '';
            perror.innerHTML = '';
        });
    });
});
