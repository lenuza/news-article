function updateArticleUrl (e) {
    event.preventDefault()
    const url = document.getElementById('newArticle').value;
    console.log(url)

    Client.fetchArticleUrl(url)

}

export { updateArticleUrl }