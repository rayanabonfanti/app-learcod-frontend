import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StudentDTO } from 'src/app/models/student/student.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacoes-student',
  templateUrl: './informacoes-student.component.html',
  styleUrls: ['./informacoes-student.component.scss']
})
export class InformacoesStudentComponent {

  studentFormGroup: FormGroup;
  student = new StudentDTO();

  @Output() voltarEvent = new EventEmitter();
  @Output() continuarEvent = new EventEmitter<any>();

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {
    this.studentFormGroup = this._formBuilder.group({
      registration: new FormControl('', Validators.required)
    });
  }

  voltar() {
    this._router.navigate(["/login"]);
  }

  continuar() {
    console.log('emit não está funcionando');
    this.continuarEvent.emit(this.studentFormGroup);
  }

}