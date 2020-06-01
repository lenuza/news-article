jest.mock('../src/client/js/fetchData.js')
const { buildData } = require('../src/client/js/fetchArticleUrl')
// const { consoleOutput } = require('../src/client/js/util')

test('Check if fetchData label match', () => {
    return buildData().then(text => {
        return expect(text).toBe('<span>category: </span>Little Bears');
    })
})