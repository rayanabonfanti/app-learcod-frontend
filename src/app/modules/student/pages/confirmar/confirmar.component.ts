import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss']
})
export class ConfirmarComponent implements OnInit {

  constructor(
    private _router: Router,
    private _location: Location,
    private _studentService: StudentService)
  { }

  ngOnInit(): void {
  }

  voltar(): void {
		this._location.back();
	}

  continuar() {
    //POST http://localhost:8080/api/student/ net::ERR_CONNECTION_REFUSED
    this._studentService.save(this._studentService.studentDTO).subscribe(
      (data) => {
          if (data) {
            this._router.navigate(["student/solicitacao"]);
        }
      }
    )
  }

}
