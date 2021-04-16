const reverseString = require('./reversetestting');

test('reverseString function exists ', () => {
    expect(reverseString).toBeDefined();
});

test('String reverse', () => {
    expect(reverseString('faris')).toEqual('siraf');
});

test('String reverse with uppercase', () => {
    expect(reverseString('Faris')).toEqual('siraf')
})
