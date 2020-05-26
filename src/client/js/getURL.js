function updateArticleUrl (e) {
    event.preventDefault()
    const url = document.getElementById('newArticle').value;
    const results = document.getElementById('results');
    console.log(url)

    fetch(`/api/text/${encodeURIComponent(url)}`)
        .then(res => {
            res.text()
                .then(txt => (results.innerHTML = '<span>category: </span>' + JSON.parse(txt).categories[0].label));
        })
        .then (document.getElementById('newArticle').value = '')
        .catch(console.error);

}

export { updateArticleUrl }