const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

 

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

 

  if (usernameValue === "") {
    setErrorFor(username, "O nome completo é obrigatório.");
  } else {
    setSuccessFor(username);
  }

 

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

 

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres sendo letras e números.");
  } else {
    setSuccessFor(password);
  }

 

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }

 

  const formControls = form.querySelectorAll(".form-control");

 

  const formIsValid = [...formControls].every((formControl) => {

    return formControl.className === "form-control success";

  });

 

  if (formIsValid) {

    console.log("O formulário está 100% válido!");

  }

}

 

function setErrorFor(input, message) {

  const formControl = input.parentElement;

  const small = formControl.querySelector("small");

 

  function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

    if (cpf === '' || cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false; // CPF inválido se vazio, com tamanho diferente de 11 dígitos ou se todos os dígitos são iguais
    }

    // Calcula o primeiro dígito verificador
    let add = 0;
    for (let i = 0; i < 9; i++) {
        add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
        rev = 0;
    }

    if (rev !== parseInt(cpf.charAt(9))) {
        return false; // CPF inválido se o primeiro dígito verificador não é igual ao informado
    }

    // Calcula o segundo dígito verificador
    add = 0;
    for (let i = 0; i < 10; i++) {
        add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
        rev = 0;
    }

    if (rev !== parseInt(cpf.charAt(10))) {
        return false; // CPF inválido se o segundo dígito verificador não é igual ao informado
    }

    return true; // CPF válido
}

// Exemplo de uso
let cpf = '123.456.789-09';
if (validarCPF(cpf)) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}


 

function setSuccessFor(input) {

  const formControl = input.parentElement;

 

  // Adicionar a classe de sucesso

  formControl.className = "form-control success";

}

function checkEmail(email) {

    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
        )}       
