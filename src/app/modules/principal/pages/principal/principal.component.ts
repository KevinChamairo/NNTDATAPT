import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/shared/servicios/autenticacion.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  tareas: FormGroup;
  taskGrup: any = [];

  constructor(private aut:AutenticacionService, private router:Router, private _fb: FormBuilder) {
    this.tareas = _fb.group({
      descripcion: [null, Validators.required],
      estado: 1,
      checked: false
    });
   }

  ngOnInit(): void {
  }

  Agregar() {
    if(this.tareas.invalid){
      Object.values(this.tareas.controls).forEach(
        control => {control.markAllAsTouched();
      })
      return;
    }else{
      this.taskGrup.push(this.tareas.value);
      this.tareas.reset();
    }

  }
  onChangeStatus(val: any) {
    this.taskGrup[val].checked = !this.taskGrup[val].checked;
  }

  eliminarTarea(index: number) {
    this.taskGrup.splice(index, 1);
  }

  public get f():any{
    return this.tareas.controls;
  }

  public cerrarSesion(){
    this.aut.limpiarDataBySession();
    this.router.navigateByUrl("/sinsesion/login");
  }


}
