const validacionTiempoReal = () => {
    const user = document.getElementById("username");

    const lower = document.getElementById("lower");
    const upper = document.getElementById("upper");
    const len = document.getElementById("len");
    const submit = document.getElementById("submit");

    user.addEventListener("input", () => {
        const value = user.value;

        const hasLower = /[a-z]/.test(value);
        const hasUpper = /[A-Z]/.test(value);
        const hasLength = value.length >= 6;

        lower.classList.toggle("valid", hasLower);
        upper.classList.toggle("valid", hasUpper);
        len.classList.toggle("valid", hasLength);

        if (hasLower && hasUpper && hasLength) {
            submit.disabled = false;
            submit.classList.add("enabled");
        } else {
            submit.disabled = true;
            submit.classList.remove("enabled");
        }
    });
}

const main = () => {
    validacionTiempoReal();
}

document.addEventListener("DOMContentLoaded", main);