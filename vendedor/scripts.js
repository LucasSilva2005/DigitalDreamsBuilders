// Inicialize o Firebase
const firebaseConfig = {
 // Suas configurações do Firebase
};
firebase.initializeApp(firebaseConfig);

// Referência ao Firestore e Storage
const db = firebase.firestore();
const storage = firebase.storage();

document.getElementById('form-postar-anuncio').addEventListener('submit', function(e) {
e.preventDefault();

// Pegue os valores dos campos do formulário
const titulo = document.getElementById('titulo').value;
const descricao = document.getElementById('descricao').value;
const preco = document.getElementById('preco').value;
const imagemFile = document.getElementById('imagem').files[0];

// Referência ao usuário logado
const userId = firebase.auth().currentUser.uid;

// Referência ao Firestore para armazenar o anúncio
const anuncioRef = db.collection('anuncios').doc(userId).collection('meusAnuncios').doc();

if (imagemFile) {
 // Upload da imagem para o Firebase Storage
 const storageRef = storage.ref(`anuncios/${userId}/${anuncioRef.id}/${imagemFile.name}`);
 const uploadTask = storageRef.put(imagemFile);

 uploadTask.on('state_changed', 
   function(snapshot) {
     // Pode adicionar um progress bar aqui, se desejar
   }, 
   function(error) {
     console.error("Erro ao fazer upload da imagem: ", error);
   }, 
   function() {
     // Upload completo
     uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
       // Salvar os dados do anúncio no Firestore
       anuncioRef.set({
         titulo: titulo,
         descricao: descricao,
         preco: preco,
         imagem: downloadURL,
         data: firebase.firestore.FieldValue.serverTimestamp()
       }).then(() => {
         alert("Anúncio salvo com sucesso!");
         // Redirecionar ou mostrar mensagem de sucesso
       }).catch(error => {
         alert("Erro ao salvar anúncio: ", error);
       });
     });
   }
 );
}
});
