import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AutenticacionService } from 'src/app/shared/servicios/autenticacion.service';
import { Router, RouterModule } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ ReactiveFormsModule, RouterModule ],
      providers: [
        FormBuilder,
        AutenticacionService,
        { provide: Router, useClass: class { navigateByUrl = jasmine.createSpy('navigateByUrl'); } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('En este test se debería mostrar error si el formulario es inválido al enviar', () => {
    const spy = spyOn(component, 'submitFormulario');
    component.submitFormulario();
    expect(spy).toHaveBeenCalled();
    expect(component.myForm.invalid).toBeTruthy();
  });

  it('En este test se debería validar el usuario y la contraseña y enviar el formulario si es válido', () => {
    const spy = spyOn(component, 'submitFormulario').and.callThrough();
    component.myForm.patchValue({
      usuario: 'test01',
      password: 'test01'
    });
    const router = TestBed.inject(Router);
    component.submitFormulario();
    expect(spy).toHaveBeenCalled();
    expect(component.myForm.valid).toBeTruthy();
    expect((router.navigateByUrl as jasmine.Spy).calls.mostRecent().args[0]).toBe('/sesion/principal');
  });

});
