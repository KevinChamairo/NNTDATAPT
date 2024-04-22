import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {

  userData?: User;
  constructor() {
    const userDataString = sessionStorage.getItem('userData');
    if(userDataString){
      this.userData = JSON.parse(userDataString);
    }
   }

  ngOnInit(): void {
  }

}
