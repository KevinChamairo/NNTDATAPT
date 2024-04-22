import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionComponent } from './sesion.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { AutenticacionService } from 'src/app/shared/servicios/autenticacion.service';

describe('SesionComponent', () => {
  let component: SesionComponent;
  let fixture: ComponentFixture<SesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionComponent ],
      imports: [ ReactiveFormsModule, RouterTestingModule, RouterModule ],
      providers: [ FormBuilder, AutenticacionService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('En este test se debería renderizar el navbar con la clase bg-light', () => {
    const navbar = fixture.nativeElement.querySelector('.navbar');
    expect(navbar).toBeTruthy();
    expect(navbar.classList.contains('bg-light')).toBeTruthy();
  });

  it('En este test se debería tener un enlace a Inicio de sesión en el navbar', () => {
    const navbarBrand = fixture.nativeElement.querySelector('.navbar-brand');
    expect(navbarBrand).toBeTruthy();
    expect(navbarBrand.textContent.trim()).toBe('Inicio de sesión');
  });

  it('En este test se debería tener un router-outlet', () => {
    const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
    expect(routerOutlet).toBeTruthy();
  });
});
