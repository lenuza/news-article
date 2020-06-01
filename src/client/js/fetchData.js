const fetchData = (newURL) => {
    return fetch(`/api/text/${encodeURIComponent(newURL)}`)
        .then(res => {
            return res.text()
        })
        .catch(err => {
            console.log(err)
        })
}

exports.fetchData = fetchData