const Intern = require('../lib/intern');

/*Test to create a new intern object*/
test('test to create a new intern object', () => {
    const intern = new Intern('Sheridan', 20, 'sheridanb5@gmail.com', 'B5SU');
    
    expect(intern.school).toEqual(expect.any(String));
});

/*Test to get school name from getSchool*/
test('test to get the school of the employee', () => {
    const intern = new Intern('Sheridan', 20, 'sheridanb5@gmail.com', 'B5SU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

/*Test to get the employee role from getRole*/
test('test to get employee role', () => {
    const intern = new Intern('Sheridan', 20, 'sheridanb5@gmail.com', 'B5SU');

    expect(intern.getRole()).toEqual('Intern');
});