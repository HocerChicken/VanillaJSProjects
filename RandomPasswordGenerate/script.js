const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
const passwordBox = document.querySelector("#password");
const lengthPasswordBox = document.querySelector("#lengthPass");
const lengthWarning = document.querySelector("#lengthWarning");
function generateRandom() {
    let password = "";
    let length = parseInt(lengthPasswordBox.value, 10);

    if (isNaN(length) || length < 0) {
        lengthWarning.textContent = "Length of Password must be a positive number";
        lengthWarning.classList.add("show");
        return;
    }
    lengthWarning.textContent = "";
    lengthWarning.classList.remove("show");
    while (password.length < length) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}
