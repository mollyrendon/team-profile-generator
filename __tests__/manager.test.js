const Manager = require('../lib/manager');

/*Test to create a new manager object*/
test('test to create a manager object', () => {
    const manager = new Manager('Sheridan', 20, 'sheridanb5@gmail.com');

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

/*Test to get the manager role from getRole*/
test('test to get employee role', () => {
    const manager = new Manager('Sheridan', 20, 'sheridanb5@gmail.com');

    expect(manager.getRole()).toEqual('Manager');
});