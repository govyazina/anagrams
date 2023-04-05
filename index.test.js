const anagrams = require('./index')

test('test for anagrams', () => {
    expect(anagrams('melon', 'lemon')).toBeTruthy()
    expect(anagrams('melon', 'watermelon')).toBeFalsy()
    expect(anagrams('melon', 'melon')).toBeTruthy()
    expect(anagrams('MELON', 'lemon')).toBeTruthy()
    expect(anagrams('abcde2', 'c2abed')).toBeTruthy()
    expect(anagrams('meeow', 'melon')).toBeFalsy()
    expect(anagrams('Quid est veritas', 'Est vir qui adest')).toBeTruthy()
})