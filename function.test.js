const functions = require('./functions');



//toBE
test('Add 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

// not
test('Add 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).not.toBe(5);
});


//toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test('should be falsy', () => {
    expect(functions.checkValue()).toBeFalsy();
})
