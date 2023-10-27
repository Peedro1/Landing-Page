const emailInput = document.getElementById("email");

const emailError = document.getElementById("textEmail");

const passwordInput = document.getElementById("password");

const passwordError = document.getElementById("textPassword");

const loginButton = document.querySelector(".btn-login");

emailInput.addEventListener("blur", validateEmail);

passwordInput.addEventListener("blur", validatePassword);

loginButton.addEventListener("click", submitForm);

function validateEmail() {
    const emailValue = emailInput.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        emailError.textContent = "Digite um e-mail válido";
        emailInput.classList.add("invalid");
    } 
    
    else {
        emailError.textContent = "";
        emailInput.classList.remove("invalid");
    }
}
function validatePassword() {
    const passwordValue = passwordInput.value.trim();
    if (passwordValue.length < 8) {
        passwordError.textContent = "A senha deve ter pelo menos 8 caracteres";
        passwordInput.classList.add("invalid");
    } 
   
    else {
        passwordError.textContent = "";
        passwordInput.classList.remove("invalid");
    }
}
function submitForm(event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim();

    const passwordValue = passwordInput.value.trim();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    const isValidPassword = passwordValue.length >= 8;
    
    if (isValidEmail && isValidPassword) {
        showSuccessMessage("E-mail cadastrado com sucesso!");
    } 
    
    else {
        showErrorMessage("Por favor, corrija os erros no formulário.");
    }
}
function showSuccessMessage(message) {
    Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: message,
    });
}
function showErrorMessage(message) {
    Swal.fire({
        icon: "error",
        title: "Erro!",
        text: message,
    });
}
