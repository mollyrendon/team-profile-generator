const Employee = require('../lib/employee');


/*Test to create new employee object*/
test('test to create new employee object', () => {
    const employee = new Employee('Sheridan', 20, 'sheridanb5@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

/*Test to get employee name from getName*/
test('test to get employee name', () => {
    const employee = new Employee('Sheridan', 20, 'sheridanb5@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

/*Test to get employee id from getId*/
test('test to get employee id', () => {
    const employee = new Employee('Sheridan', 20, 'sheridanb5@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

/*Test to get employee email from getEmail*/
test('test to get employee email', () => {
    const employee = new Employee('Sheridan', 20, 'sheridanb5@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

/*Test to get employee role from getRole*/
test('test to get the role of the employee', () => {
    const employee = new Employee('Sheridan', 20, 'sheridanb5@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});