import { NeoButtonModule } from 'src/app/shared/components/neo-button/neo-button.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformacoesStudentComponent } from './informacoes-student.component';

@NgModule({
  declarations: [
    InformacoesStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NeoButtonModule
  ],
  exports: [
    InformacoesStudentComponent
  ]
})
export class InformacoesStudentModule { }