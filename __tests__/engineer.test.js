const Engineer = require('../lib/engineer');

/*Test to create new engineer object*/
test('test to create a new engineer object', () => {
    const engineer = new Engineer('Sheridan', 20, 'sheridanb5@gmail.com');

    expect(engineer.github.toEqual(expect.any(String)));
});

/*Test to get Github username from getGithub*/
test('test to get github username', () => {
    const engineer = new Engineer('Sheridan', 20, 'sheridanb5@gmail.com');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


/*Test to get role from getRole*/
test('test to get employee role', () => {
    const engineer = new Engineer('Sheridan', 20, 'sheridanb5@gmail.com');
    expect(engineer.getRole()).toEqual('Engineer');
});