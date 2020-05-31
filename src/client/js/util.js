
const consoleOutput = (newURL) => {
    Client.displayData(newURL).then(consoleOutput => {
        const transformOutput = consoleOutput.toUpperCase()
        return transformOutput
    })
    .catch(err => {
        console.log(err)
    })
}

exports.consoleOutput = consoleOutput