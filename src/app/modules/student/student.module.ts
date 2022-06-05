import { NeoButtonComponent } from './../../shared/components/neo-button/neo-button.component';
import { NeoButtonModule } from 'src/app/shared/components/neo-button/neo-button.module';
import { InformacoesStudentModule } from './components/informacoes-student/informacoes-student.module';
import { StudentComponent } from './pages/student/student.component';
import { StudentRoutingModule } from './student-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    InformacoesStudentModule,
    NeoButtonModule
  ],
})
export class StudentModule { }
