import { Jugador2 } from './jugador2';

describe('Jugador 2 Emit', () => {
  let jugador2: Jugador2;

  beforeEach(() => (jugador2 = new Jugador2()));
  it('Debe emitir un evento cuando recibe un daño ', () => {
    let nuevoHp = 0;
    jugador2.hpCambia.subscribe((hp) => {
      nuevoHp = hp;
    });
    jugador2.recibeDanio(1000);
    expect(nuevoHp).toBe(0);
  });

  it('Debe emitir un evento cuando recibe un daño  y sobrevive si es menos de 100', () => {
    let nuevoHp = 0;
    jugador2.hpCambia.subscribe((hp) => (nuevoHp = hp));
    jugador2.recibeDanio(50);
    expect(nuevoHp).toBe(50);
  });
});
