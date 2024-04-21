import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { principalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './pages/principal/principal.component';

@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports:[CommonModule,FormsModule,ReactiveFormsModule,principalRoutingModule]
})
export class principalModule { }
