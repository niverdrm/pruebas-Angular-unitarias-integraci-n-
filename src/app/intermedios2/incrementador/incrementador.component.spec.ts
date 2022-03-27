import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Incremendator Component', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
  });

  it('Debe mostrar la leyenda', () => {
    component.leyenda = 'Progreso de carga';
    fixture.detectChanges(); //Detectar cambios
    const elem: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;

    expect(elem.innerHTML).toContain('Progreso de carga');
  });

  // xit('Debe de mostrar en el input el valor del progreso', () => {
  //   component.cambiarValor(5);
  //   fixture.detectChanges();

  //   fixture.whenStable().then(() => {
  //     const input = fixture.debugElement.query(By.css('input'));
  //     const elem = input.nativeElement;

  //     expect(elem.value).toBe('55');
  //   });
  // });

  it('debe incrementar/decrementar en un 5 con click en el boton', () => {
    const bontones = fixture.debugElement.queryAll(By.css('.btn-primary'));

    bontones[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);

    bontones[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);
  });

  it('En el titulo del componente debe de mostrar el progreso', () => {
    const bontones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    bontones[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    const elem: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;

    expect(elem.innerHTML).toContain('45');
  });
});
