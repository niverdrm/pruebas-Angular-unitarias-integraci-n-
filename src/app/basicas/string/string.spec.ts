import { mensaje } from './string';

describe('Prueba de string', () => {
  it('Debe de regresar un string', () => {
    const resp = mensaje('Niver');
    expect(typeof resp).toBe('string');
  });

  it('Debe de regresar un  saludo con el nombre enviado', () => {
    const nombre = 'pedris';
    const resp = mensaje(nombre);
    expect(resp).toContain(nombre);
  });
});
