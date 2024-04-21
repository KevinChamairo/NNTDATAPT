import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const rutas:Routes = [{
  path:'',children:[
      {path:'login',component:LoginComponent},
      {path:'registro',component:RegistroComponent}
  ]
}];
@NgModule({imports:[RouterModule.forChild(rutas)],
exports:[RouterModule]})
export class loginRoutingModule{

}
