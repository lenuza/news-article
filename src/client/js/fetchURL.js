function fetchArticleUrl (url) {
    const results = document.getElementById('results');

    fetch(`/api/text/${encodeURIComponent(url)}`)
        .then(res => {
            res.text()
                .then(txt => (results.innerHTML = '<span>category: </span>' + JSON.parse(txt).categories[0].label));
        })
        .then (document.getElementById('newArticle').value = '')
        .catch(console.error);

}

export { fetchArticleUrl }