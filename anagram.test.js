const isAnagram = require('./anagram');

test('isAnagram function exist', () => {
    expect( typeof isAnagram).toEqual('function');
})


test('cinema is an anagram of iceman', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('Dormitory is an anagram of dirty room##', () => {
    expect(isAnagram('Dormitory', 'dirty room')).toBeTruthy();
});
