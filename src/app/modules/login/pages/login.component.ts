import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  formDadosLogin!: FormGroup;
  
  constructor() { 
    this.formDadosLogin = new FormGroup({
      login: new FormControl(),
      senha: new FormControl()
    });
  }

  ngOnInit(): void {
  }

}