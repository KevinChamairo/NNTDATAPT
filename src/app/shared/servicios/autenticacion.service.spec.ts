import { TestBed } from '@angular/core/testing';

import { AutenticacionService } from './autenticacion.service';

describe('AutenticacionService', () => {
  let service: AutenticacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('En este test se debería permitir el ingreso con credenciales válidas', () => {
    const credentials = { usuario: 'test01', password: 'test01' };
    const result = service.ingresarAplicativo(credentials);
    expect(result).toBe(true);
  });

  it('En este test se debería rechazar el ingreso con credenciales inválidas', () => {
    const credentials = { usuario: 'test01', password: 'incorrecta' };
    const result = service.ingresarAplicativo(credentials);
    expect(result).toBe(false);
  });

  it('En este test se debería devolver los datos de autenticación almacenados en la sesión', () => {
    sessionStorage.setItem('userData', JSON.stringify({ usuario: 'test01', password: 'test01' }));
    const result = service.getAutenticationBySession();
    expect(result).toEqual(JSON.stringify({ usuario: 'test01', password: 'test01' }));
  });

  it('En este test se debería limpiar los datos de autenticación almacenados en la sesión', () => {
    sessionStorage.setItem('userData', JSON.stringify({ usuario: 'test01', password: 'test01' }));
    service.limpiarDataBySession();
    const result = sessionStorage.getItem('userData');
    expect(result).toBe('');
  });

});
