import { Schedule } from '../../../src/domain/entity/schedule';

describe('Modalidad', () => {
  it('debe cumplir con el esquemas descrito por la interfaz', () => {
    const modalidad: Schedule = {
      id: '1', name: 'Huesito', surname: 'Lechuga', email: 'huesito@lechuga.com', dateOnBoard: '13 02 2023 12 27 00',
    };
    expect(modalidad).toHaveProperty('id', '1');
    expect(modalidad).toHaveProperty('name', 'Huesito');
    expect(modalidad).toHaveProperty('surname', 'Lechuga');
    expect(modalidad).toHaveProperty('email', 'huesito@lechuga.com');
    expect(modalidad).toHaveProperty('dateOnBoard', '13 02 2023 12 27 00');
  });
});
