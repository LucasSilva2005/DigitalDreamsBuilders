document.addEventListener('DOMContentLoaded', function () {
 const input = document.getElementById('search-input');
 const placeholderText = "O que você deseja hoje meu mano";
 let index = 0;

 function typePlaceholder() {
   if (index < placeholderText.length) {
     input.placeholder += placeholderText.charAt(index);
     index++;
     setTimeout(typePlaceholder, 100); // Ajuste o tempo conforme desejado
   }
 }

 // Inicie a animação após o carregamento do DOM
 typePlaceholder();
});