import { incrementador } from './numeros';

describe('Pruebas de numeros', () => {
  it('Si numero es mayor a 100 retorna 100', () => {
    const res = incrementador(300);
    expect(res).toBe(100);
  });
  it('Si numero es menor a 100 retorna el numero mas 1', () => {
    const res = incrementador(50);
    expect(res).toBe(51);
  });
});
