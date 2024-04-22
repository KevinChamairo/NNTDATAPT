import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincipalComponent } from './principal.component';
import { AutenticacionService } from 'src/app/shared/servicios/autenticacion.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

describe('PrincipalComponent', () => {
  let component: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalComponent ],
      imports: [ ReactiveFormsModule, RouterTestingModule, RouterModule ],
      providers: [ FormBuilder, AutenticacionService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('En este test se debería agregar una tarea', () => {
    const descripcion = 'Tarea de prueba';
    component.tareas.patchValue({
      descripcion: descripcion
    });
    component.Agregar();
    expect(component.taskGrup.length).toBe(1);
    expect(component.taskGrup[0].descripcion).toBe(descripcion);
  });

  it('En este test se debería cambiar el estado de una tarea', () => {
    const tarea = { descripcion: 'Tarea de prueba', checked: false };
    component.taskGrup.push(tarea);
    component.onChangeStatus(0);
    expect(component.taskGrup[0].checked).toBe(true);
  });

  it('En este test se debería eliminar una tarea', () => {
    const tarea = { descripcion: 'Tarea de prueba', checked: false };
    component.taskGrup.push(tarea);
    component.eliminarTarea(0);
    expect(component.taskGrup.length).toBe(0);
  });

});
