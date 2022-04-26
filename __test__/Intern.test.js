//Intern constructor
const Intern = require('../lib/Intern');

//create Intern object
describe('Intern', () => {
  it('creates an Intern object', () => {
    const intern = new Intern('Alex', 3, 'alex@gmail.com', 'UCF');

    expect(intern.name).toBe('Alex');
    expect(intern.id).toBe(3);
    expect(intern.email).toBe('alex@gmail.com');
    expect(intern.school).toBe('UCF');
  });

  it('gets Intern school', () => {
    const intern = new Intern('Alex', 3, 'alex@gmail.com', 'UCF');

    expect(intern.getSchool()).toBe('UCF');
  });

  it('gets Intern role', () => {
    const intern = new Intern('Alex', 3, 'alex@gmail.com', 'UCF');

    expect(intern.getRole()).toBe("Intern");
  });
});
