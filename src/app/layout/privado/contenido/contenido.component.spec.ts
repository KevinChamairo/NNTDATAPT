import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContenidoComponent } from './contenido.component';
import { RouterTestingModule } from '@angular/router/testing'; // Importa RouterTestingModule

describe('ContenidoComponent', () => {
  let component: ContenidoComponent;
  let fixture: ComponentFixture<ContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('En este test se debería renderizar el navbar con la clase bg-body-tertiary', () => {
    const navbar = fixture.nativeElement.querySelector('.navbar');
    expect(navbar).toBeTruthy();
    expect(navbar.classList.contains('bg-body-tertiary')).toBeTruthy();
  });

  it('En este test se debería tener un router-outlet', () => {
    const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
    expect(routerOutlet).toBeTruthy();
  });

});
