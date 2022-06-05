import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomSweetAlertService } from '../customsweetalert/custom-sweet-alert.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private _router: Router,
    private _alert: CustomSweetAlertService,
  ) { }

  handleError<T>() {
    return (e: any): Observable<T> => {
      if (e && e.error && e.error.message == 'Authorization has been denied for this request.') {
        this._alert.closeLoading();
        this._alert.alertError('Sessão expirada, favor efetuar o login novamente.');
        this.logout();
      }

      return e;
    };
  }

  logout() {
    this._router.navigate(['/']);
  }
}
