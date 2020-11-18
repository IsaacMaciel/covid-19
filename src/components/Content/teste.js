const email = document.getElementById('email'); //Pego um elemento que tenha o ID email
const senha = document.getElementById('senha'); // Pego um elemento que tenha um id senha
const form = document.getElementById('form'); // Pego um elemento que tenha um id form
const errorElement = document.getElementById('error'); // Pego um elemento que tenha um id error
form.addEventListener('submit', (e) => {
  // estou adicionando no elemento form, para ele escutar o evento submit.
  e.preventDefault();
  let messages = [];
  if (email.value) {
    messages.push('Email é requerido');
  }

  if (senha.value.lenght <= 6) {
    messages.push('Senha precisa ser maior que 6');
  }

  errorElement.innerText = messages.join(',');
});
