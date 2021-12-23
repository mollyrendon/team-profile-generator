const Intern = require('../lib/intern');

/*Test to create a new intern object*/
test('test to create a new intern object', () => {
    const intern = new Intern('Sheridan', 20, 'sheridanb5@gmail.com', 'B5SU');
    
    expect(intern.school).toEqual(expect.any(String));
});

test('test to get the school of the employee', () => {
    const intern = new Intern('Sheridan', 20, 'sheridanb5@gmail.com', 'B5SU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});