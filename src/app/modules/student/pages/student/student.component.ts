import { StudentService } from './../../../../services/student/student.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  constructor(
    public _router: Router,
    public _studentService: StudentService
    ) {

  }

  voltar(event: any) {
    if (event) {
      this._router.navigateByUrl('home');
    }
  }

  continuar(event: any) {
    //if (event.status == 'VALID') {
      this.converterFormParaDTO(event);
      this._router.navigateByUrl('student/confirmar');
    //}
  }

  converterFormParaDTO(event: any) {
    this._studentService.studentDTO.registration = event.value.registration;
  }

}