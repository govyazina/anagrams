const anagrams = require('./index')

test('test for anagrams', () => {
    expect(anagrams('melon', 'lemon')).toBeTruthy()
})