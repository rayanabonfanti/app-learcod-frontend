import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ErrorService } from '../error/error.service';
import { StudentDTO } from 'src/app/models/student/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private _http: HttpClient,
    private _errorService: ErrorService
  ) { }

  studentDTO = new StudentDTO();

  save(studentDTO: StudentDTO): Observable<any> {
    let endpoint = environment.endpoint.student;

    let body = {
      "registration": studentDTO.registration
    }
    
    return this._http.post<any>(endpoint, body).pipe(catchError(this._errorService.handleError()));
  }

}