import { FormBuilder } from '@angular/forms';
import { FormularioRegister } from './formulario';

describe('Formularios', () => {
  let componente: FormularioRegister;

  beforeEach(() => {
    componente = new FormularioRegister(new FormBuilder());
  });

  it('Debe crear un formulario con dos campos( email, password)', () => {
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });

  it('Email es obligatorio', () => {
    const control = componente.form.get('email');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });
  it('Email es debe ser valido', () => {
    const control = componente.form.get('email');
    control?.setValue('fernando@gmail.com');
    expect(control?.valid).toBeTruthy();
  });
});
