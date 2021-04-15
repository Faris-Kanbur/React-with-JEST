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


test('User should be Brad Traversy object ', () => {
    expect(functions.createUser()).toStrictEqual({
        firstName: 'faris',
        lastName: 'Kanbur'
    });
});


//LessThan and GreaterThan
test('Should bu under 1600 ', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1+load2).toBeLessThan(1600);
    // expect(load1+load2).toBeGreaterThan(1800);
})

// Regex
test('There is no I in team', () => {
    expect('team').toMatch(/teaM/i);
})

//Array
// test('Admin should be in username ', () => {
//    usernames = ['faris', 'kanbur', 'cem']
//     expect(usernames).toContain('fariS');
// })

// Working with async data

// 1-Promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual('Leanne Graham');
    })
});

// 2-Async Await
test('User fetched name should be Leanne Graham', async() => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
   
});
