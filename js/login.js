const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled')
        return;
    }
    // com o return no fim do if ele vai direto para o fim da função
    // não passando pelo resto

    button.setAttribute('disabled', '')
}

//preeventDefault serve para previnir o comportamento padrão do formulario
//que é de recarregar a página
const handleSubmit = (event) => {
    event.preventDefault();
    
    localStorage.setItem('jogador', input.value);
    window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);