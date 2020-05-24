function updateArticleUrl () {
    const url = document.getElementById('newArticle').value;
    const results = document.getElementById('results');
    console.log(url)
    return fetch(`http://localhost:8000/text/${encodeURIComponent(url)}`)
        .then(res => {
            res.text()
                .then(txt => (results.innerHTML = JSON.parse(txt).text));
        })
        .catch(console.error);
}

export { updateArticleUrl };