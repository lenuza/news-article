const { fetchData } = require('./fetchData')
const results = document.getElementById('results')

const buildData = (newURL) => {
    return fetchData(newURL)
        .then(text => {
            const output = [
                JSON.parse(text).text,
                JSON.parse(text).language,
                JSON.parse(text).categories[0].label
            ]
            return output
        })
        .catch(console.log)
}

const displayData = (newURL) => {
    buildData(newURL)
        .then(output => {
            // output = `<p> ${output} </p>`
            // console.log(output)
            // return results.innerHTML = output
            for ( let i = 0; i < output.length; i++) {
                const paragraph = document.createElement('p')
                paragraph.innerHTML = output[i]
                results.appendChild(paragraph)
            }
        })
        .catch(console.log)
}

exports.displayData = displayData
exports.buildData = buildData