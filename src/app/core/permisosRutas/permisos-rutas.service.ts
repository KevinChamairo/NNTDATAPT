import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from 'src/app/shared/servicios/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class PermisosRutasService implements CanActivate {

  constructor(private router:Router, private autenticacionPrd:AutenticacionService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!Boolean(this.autenticacionPrd.getAutenticationBySession()))
      {
        return this.router.parseUrl("/sinsesion/login")
      }
    return Boolean(this.autenticacionPrd.getAutenticationBySession());
  }
}
