// Variáveis que armazenam o DOM dos inputs
const inpPassword = document.getElementById('inpPassword');
const showPassword = document.getElementById('showPassword');

// Muda o tipo do "input de senha" de password para text e vice-versa
showPassword.addEventListener('click', function() {
    if (showPassword.checked) {
        inpPassword.type = 'text';
    } else {
        inpPassword.type = 'password';
    }
})

// Evita o envio do formulaário
const form = document.querySelector('form')  // Variável que armazena o DOM do formulário

function naoEnviarFormulario(e) {  // FUnção que evita o envio do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
    })
}

naoEnviarFormulario()

// Verifica o valor dos campos do formulário
form.addEventListener('submit', () => {
    let email = document.getElementById('inpEmail').value
    let password = inpPassword.value

    console.log(`O e-mail é: ${email}`)
    console.log(`A senha é: ${password}`)
})