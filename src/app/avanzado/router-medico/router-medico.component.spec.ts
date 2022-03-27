import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, from, Observable, Subject } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';

class FakeRouter {
  navigate(params: any) {}
}

class FakeActivatedRoute {
  // params: Observable<any> = EMPTY;
  private subject = new Subject();

  push(valor: any) {
    this.subject.next(valor);
  }
  get params() {
    return this.subject.asObservable();
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        // { provide: ActivatedRoute, useClass: FakeActivatedRoute },
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{ id: '123' }]),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(' Debe direccionar al medico cuando se guarde', () => {
    const router = TestBed.inject(Router);

    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('Debe colocar el id = nuevo', () => {
    // component = fixture.componentInstance;
    // const activatedRouter: FakeActivatedRoute = TestBed.inject(ActivatedRoute);

    // activatedRouter.push({ id: 'nuevo' });

    expect(component.id).toBe('123');
  });
});
