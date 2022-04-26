//Employee constructor
const Employee = require('../lib/Employee');

//create employee object
describe('Employee', () => {
  it('creates an employee object', () => {
    const employee = new Employee('Alex', 3, 'alex@gmail.com');

    expect(employee.name).toBe('Alex');
    expect(employee.id).toBe(3);
    expect(employee.email).toBe('alex@gmail.com');
  });

  it('gets employee name', () => {
    const employee = new Employee('Alex', 3, 'alex@gmail.com');

    expect(employee.getName()).toBe('Alex');
  });

  it('gets employee id', () => {
    const employee = new Employee('Alex', 3, 'alex@gmail.com');

    expect(employee.getId()).toBe(3);
  });

  it('gets employee email', () => {
    const employee = new Employee('Alex', 3, 'alex@gmail.com');

    expect(employee.getEmail()).toBe('alex@gmail.com');
  });

  it('gets employee role', () => {
    const employee = new Employee('Alex', 3, 'alex@gmail.com');

    expect(employee.getRole()).toBe("Employee");
  });
});
