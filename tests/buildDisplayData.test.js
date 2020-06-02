jest.mock('../src/client/js/fetchData.js')
const { buildData } = require('../src/client/js/buildDisplayData')

test('Check if fetchData label match', () => {
    return buildData().then(text => {
        return expect(text).toStrictEqual({
            "text":"narwhals are unicorns of the sea",
            "language": "en",
            "categories": [{"label": "Little Bears"}]
        });
    })
})