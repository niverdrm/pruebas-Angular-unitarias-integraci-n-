import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { from, Observable, EMPTY, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;
  let servicio: MedicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, MedicosService],
    });

    const fixture = TestBed.createComponent(MedicosComponent);
    componente = fixture.componentInstance;
    servicio = fixture.debugElement.injector.get(MedicosService);
  });

  it('Debe de cargar los médicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];

    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from([medicos]);
    });
    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('Debe llamar al servidor para agregar un médico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake(() => EMPTY);

    componente.agregarMedico();

    expect(espia).toHaveBeenCalled();
  });

  it('debe de agregar una arreglo de medico al arreglo de medicos', () => {
    const medico = { id: 1, nombre: 'Juan' };
    spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));
    componente.agregarMedico();
    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('si falla la adición, la propiedad mensjaeError debe ser igual al error del servicio', () => {
    const error = 'no se puedo agregar el medico';
    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(error));

    componente.agregarMedico();

    expect(componente.mensajeError).toBe(error);
  });

  it('Debe llamar al servidor para borrar un medico', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
    componente.borrarMedico('1');
    expect(espia).toHaveBeenCalledWith('1');
  });

  it(' NO Debe llamar al servidor para borrar un medico', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
    componente.borrarMedico('1');
    expect(espia).not.toHaveBeenCalledWith('1');
  });
});
