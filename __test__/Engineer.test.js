//Engineer constructor
const Engineer = require('../lib/Engineer');

//create Engineer object
describe('Engineer', () => {
  it('creates an Engineer object', () => {
    const engineer = new Engineer('Alex', 3, 'alex@gmail.com', 'alex');

    expect(engineer.name).toBe('Alex');
    expect(engineer.id).toBe(3);
    expect(engineer.email).toBe('alex@gmail.com');
    expect(engineer.github).toBe('alex');
  });

  it('gets Engineer github', () => {
    const engineer = new Engineer('Alex', 3, 'alex@gmail.com', 'alex');

    expect(engineer.getGithub()).toBe('alex');
  });

  it('gets Engineer role', () => {
    const engineer = new Engineer('Alex', 3, 'alex@gmail.com', 'alex');

    expect(engineer.getRole()).toBe("Engineer");
  });
});
