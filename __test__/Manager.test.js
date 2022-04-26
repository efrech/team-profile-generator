//Manager constructor
const Manager = require('../lib/Manager');

//create Manager object
describe('Manager', () => {
  it('creates an Manager object', () => {
    const manager = new Manager('Alex', 3, 'alex@gmail.com', '5555555555');

    expect(manager.name).toBe('Alex');
    expect(manager.id).toBe(3);
    expect(manager.email).toBe('alex@gmail.com');
    expect(manager.officeNumber).toBe('5555555555');
  });

  it('gets Manager getOfficeNumber', () => {
    const manager = new Manager('Alex', 3, 'alex@gmail.com', '5555555555');

    expect(manager.getOfficeNumber()).toBe('5555555555');
  });

  it('gets Manager role', () => {
    const manager = new Manager('Alex', 3, 'alex@gmail.com', '5555555555');

    expect(manager.getRole()).toBe("Manager");
  });
});
