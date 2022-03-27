import { usuarioIngresado } from './booleanos';

describe('Pruebas de booleano', () => {
  it('Debe retornar true', () => {
    const res = usuarioIngresado();
    expect(res).toBeTruthy();
  });
});
