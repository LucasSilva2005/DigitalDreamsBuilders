// Função de validação da senha
function isPasswordValid(password) {
  const minLength = password.length >= 8;
  const uppercase = /[A-Z]/.test(password);
  const specialChar = /[\W_]/.test(password); // Permite qualquer caractere especial

  // Exibir ou esconder as mensagens de validação
  const minLengthElement = document.getElementById('minLength');
  const uppercaseElement = document.getElementById('uppercase');
  const specialCharElement = document.getElementById('specialChar');

  if (minLengthElement) minLengthElement.style.color = minLength ? 'green' : 'red';
  if (uppercaseElement) uppercaseElement.style.color = uppercase ? 'green' : 'red';
  if (specialCharElement) specialCharElement.style.color = specialChar ? 'green' : 'red';

  return minLength && uppercase && specialChar;
}

// Lidar com o envio do formulário
document.getElementById('signup-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio automático do formulário

  const password = document.getElementById('password').value;

  // Validar a senha
  if (!isPasswordValid(password)) {
    alert('A senha não atende aos requisitos.');
    return; // Impede o cadastro se a senha for inválida
  }

  // Aqui você pode adicionar o código para enviar os dados para Firebase ou backend
  alert('Cadastro realizado com sucesso!');
});
