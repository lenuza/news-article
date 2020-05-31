jest.mock('../src/client/js/fetchData.js')
const { buildElement } = require('../src/client/js/fetchArticleUrl')
// const { consoleOutput } = require('../src/client/js/util')

test('Check if fetchData label match', () => {
    return buildElement('').then(text => {
        return expect(text).toBe('<span>category: </span>Little Bears');
    })
})