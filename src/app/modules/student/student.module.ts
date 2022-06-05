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
    StudentRoutingModule
  ],
})
export class StudentModule { }
