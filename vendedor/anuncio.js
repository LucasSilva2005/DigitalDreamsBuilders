function criarAnuncio(anuncio) {
    // Supondo que você tenha uma referência ao banco de dados do Firebase
    const anunciosRef = firebase.database().ref('anuncios');

    anunciosRef.push(anuncio)
        .then(() => {
            // Redireciona para a página de anúncios do vendedor após o anúncio ser criado
            window.location.href = '/pagina-de-anuncios.html?vendedorId=' + anuncio.userId;
        })
        .catch((error) => {
            console.error("Erro ao criar o anúncio:", error);
        });
}
