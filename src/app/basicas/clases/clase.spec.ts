import { Jugador } from './clase';

describe('Pruebas de clases', () => {
  let jugardor = new Jugador();

  beforeAll(() => {
    //  console.log('beforeAll')
  });
  beforeEach(() => {
    //  console.log('beforeEach')
    // jugardor.hp = 100;
    jugardor = new Jugador();
  });

  afterAll(() => {
    //  console.log('afterAll')
  });
  afterEach(() => {
    //  console.log('afterEach')
  });

  it('Si recibe 20 de daño retorna 80 de hp', () => {
    // const jugardor = new Jugador();
    const res = jugardor.recibeDanio(20);

    expect(res).toBe(80);
  });

  it('Si recibe 50 de daño retorna 50 de hp', () => {
    // const jugardor = new Jugador();
    const res = jugardor.recibeDanio(50);

    expect(res).toBe(50);
  });

  it('Si recibe 100 de daño retorna 0 de hp', () => {
    // const jugardor = new Jugador();
    const res = jugardor.recibeDanio(100);

    expect(res).toBe(0);
  });
});
