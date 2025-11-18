const main = () => {
const form = document.querySelector('.form-container');
const cardNumber = document.getElementById('cardNumber');
const cardHolder = document.getElementById('cardHolder');
const cardMonth = document.getElementById('cardMonth');
const cardYear = document.getElementById('cardYear');
const cardCvv = document.getElementById('cardCvv');
const cardContainer = document.querySelector('.card-container');

const cardNumberDisplay = document.getElementById('cardNumberDisplay');
const cardHolderDisplay = document.getElementById('cardHolderDisplay');
const cardExpiryDisplay = document.getElementById('cardExpiryDisplay');
const cardCvvDisplay = document.getElementById('cardCvvDisplay');

cardNumber.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\s/g, ''); 
    value = value.replace(/(\d{4})/g, '$1 ').trim(); 
    e.target.value = value;
    cardNumberDisplay.textContent = value || '#### #### #### ####';
});

cardHolder.addEventListener('input', (e) => {
    cardHolderDisplay.textContent = (e.target.value.toUpperCase() || 'FULL NAME');
});

function updateExpiryDate() {
    const month = cardMonth.value || 'MM';
    const year = cardYear.value || 'YY';
    cardExpiryDisplay.textContent = `${month}/${year}`;
}

cardMonth.addEventListener('change', updateExpiryDate);
cardYear.addEventListener('change', updateExpiryDate);

cardCvv.addEventListener('input', (e) => {
    cardCvvDisplay.textContent = e.target.value;
});

cardCvv.addEventListener('focus', () => {
    cardContainer.classList.add('is-flipped');
});

cardCvv.addEventListener('blur', () => {
    cardContainer.classList.remove('is-flipped');
});

updateExpiryDate();

function toggleError(input, message) {
    const group = input.closest('.input-group');
    let errorMessage = group.querySelector('.error-message');

    if (!errorMessage) {
        errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        group.appendChild(errorMessage);
    }

    if (message) {
        group.classList.add('error');
        errorMessage.textContent = message;
    } else {
        group.classList.remove('error');
    }
}

function validateCardNumber() {
    const value = cardNumber.value.trim();
    const regex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/; 

    if (!value) {
        toggleError(cardNumber, 'El número de tarjeta es obligatorio.');
        return false;
    }
    if (!regex.test(value)) {
        toggleError(cardNumber, 'Formato inválido (debe tener 16 dígitos).');
        return false;
    }
    toggleError(cardNumber, '');
    return true;
}

function validateCardHolder() {
    const value = cardHolder.value.trim();
    const regex = /^[a-zA-Z\s]{5,}$/; 

    if (!value) {
        toggleError(cardHolder, 'El nombre del titular es obligatorio.');
        return false;
    }
    if (!regex.test(value)) {
        toggleError(cardHolder, 'Ingrese un nombre y apellido válidos (solo letras).');
        return false;
    }
    toggleError(cardHolder, '');
    return true;
}

function validateExpiryDate() {
    const month = cardMonth.value;
    const year = cardYear.value;
    
    if (!month || !year) {
        toggleError(cardMonth, 'Seleccione la fecha de expiración.');
        return false;
    }
    
    toggleError(cardMonth, '');
    return true;
}

function validateCardCvv() {
    const value = cardCvv.value.trim();
    const regex = /^\d{3,4}$/; 

    if (!value) {
        toggleError(cardCvv, 'El CVV es obligatorio.');
        return false;
    }
    if (!regex.test(value)) {
        toggleError(cardCvv, 'Debe tener 3 o 4 dígitos.');
        return false;
    }
    toggleError(cardCvv, '');
    return true;
}

cardNumber.addEventListener('blur', validateCardNumber);
cardHolder.addEventListener('blur', validateCardHolder);
cardMonth.addEventListener('change', validateExpiryDate);
cardYear.addEventListener('change', validateExpiryDate);
cardCvv.addEventListener('blur', validateCardCvv);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isCardValid = validateCardNumber();
    const isHolderValid = validateCardHolder();
    const isExpiryValid = validateExpiryDate();
    const isCvvValid = validateCardCvv();

    if (isCardValid && isHolderValid && isExpiryValid && isCvvValid) {
        alert('Formulario válido. Enviando datos...');
    } else {
        alert('Por favor, corrija los errores del formulario.');
    }
});
}


document.addEventListener("DOMContentLoaded", main);