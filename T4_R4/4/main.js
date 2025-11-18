const main = () => {
    
    const form = document.querySelector('.sign-up-form');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const agreeTerms = document.getElementById('agree-terms');
    const formContent = document.querySelector('.form-content'); 

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    
    const phoneRegex = /^\d{3}-?\d{3}-?\d{4}$/; 

    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/;
    

    function setInvalid(element, message = '') {
        element.classList.add('is-invalid');
        const errorMessage = element.parentElement.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.textContent = message;
        } else if (message) {
            const msgElement = document.createElement('div');
            msgElement.className = 'error-message';
            msgElement.textContent = message;
            element.parentElement.appendChild(msgElement);
        }
    }

    function setValid(element) {
        element.classList.remove('is-invalid');
        const errorMessage = element.parentElement.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    function validateForm() {
        let isValid = true;

        [firstName, lastName, phone, email, password, confirmPassword].forEach(setValid);
        formContent.classList.remove('terms-error');

        if (firstName.value.trim() === '') {
            setInvalid(firstName, 'El nombre es obligatorio.');
            isValid = false;
        } else if (!nameRegex.test(firstName.value.trim())) {
            setInvalid(firstName, 'Solo letras, espacios o guiones (e.g., Peter).');
            isValid = false;
        }

        if (lastName.value.trim() === '') {
            setInvalid(lastName, 'El apellido es obligatorio.');
            isValid = false;
        } else if (!nameRegex.test(lastName.value.trim())) {
            setInvalid(lastName, 'Solo letras, espacios o guiones (e.g., Deltando).');
            isValid = false;
        }

        if (phone.value.trim() === '') {
            setInvalid(phone, 'El teléfono es obligatorio.');
            isValid = false;
        } else if (!phoneRegex.test(phone.value.trim())) {
            setInvalid(phone, 'Formato incorrecto. Use NNN-NNN-NNNN (e.g., 949-867-5309).');
            isValid = false;
        }

        if (email.value.trim() === '') {
            setInvalid(email, 'El email es obligatorio.');
            isValid = false;
        } else if (!emailRegex.test(email.value.trim())) {
            setInvalid(email, 'Formato de email incorrecto (e.g., user@crowdrise.com).');
            isValid = false;
        }

        if (password.value.length < 6) {
            setInvalid(password, 'Mínimo 6 caracteres.');
            isValid = false;
        }

        if (confirmPassword.value.trim() === '') {
            setInvalid(confirmPassword, 'Confirmación obligatoria.');
            isValid = false;
        } else if (confirmPassword.value !== password.value) {
            setInvalid(confirmPassword, 'Las contraseñas no coinciden.');
            isValid = false;
        }

        if (!agreeTerms.checked) {
            formContent.classList.add('terms-error');
            isValid = false;
        } else {
            formContent.classList.remove('terms-error');
        }

        return isValid;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (validateForm()) {
            alert('¡Formulario enviado con éxito! (Simulación de envío)');
        } else {
            alert('Por favor, corrige los campos resaltados.');
        }
    });

    [firstName, lastName, phone, email, password, confirmPassword, agreeTerms].forEach(input => {
        input.addEventListener('input', () => {
            if (input.classList.contains('is-invalid') || input === agreeTerms) {
                validateForm();
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", main);