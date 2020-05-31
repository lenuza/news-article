const fetchData = () => {
    return Promise.resolve(`{
        "text":"narwhals are unicorns of the sea",
        "categories": [{"label": "Little Bears"}]
    }`)
}

exports.fetchData = fetchData