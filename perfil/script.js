// script.js
document.addEventListener('DOMContentLoaded', function() {
 const fileInput = document.getElementById('file-input');
 const uploadBtn = document.getElementById('upload-btn');
 const profilePic = document.getElementById('profile-pic');
 const changePasswordForm = document.getElementById('change-password-form');
 const postProductForm = document.getElementById('post-product-form');

 // Alterar foto de perfil
 uploadBtn.addEventListener('click', function() {
     const file = fileInput.files[0];
     if (file) {
         const reader = new FileReader();
         reader.onload = function(event) {
             profilePic.src = event.target.result;
         };
         reader.readAsDataURL(file);
     }
 });

 // Alterar senha
 changePasswordForm.addEventListener('submit', function(event) {
     event.preventDefault();
     const currentPassword = document.getElementById('current-password').value;
     const newPassword = document.getElementById('new-password').value;
     
     // Aqui você deve adicionar a lógica para alterar a senha, como fazer uma solicitação para o backend
     alert('Senha alterada com sucesso!');
 });

 // Anunciar produto
 postProductForm.addEventListener('submit', function(event) {
     event.preventDefault();
     const productName = document.getElementById('product-name').value;
     const productDescription = document.getElementById('product-description').value;
     const productImage = document.getElementById('product-image').files[0];
     
     // Aqui você deve adicionar a lógica para anunciar o produto, como fazer uma solicitação para o backend
     alert('Produto anunciado com sucesso!');
 });
});
