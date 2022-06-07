import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmarComponent } from './pages/confirmar/confirmar.component';
import { StudentComponent } from './pages/student/student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
  },
  {
    path: 'confirmar',
    children: [
      {
        path: '',
        component: ConfirmarComponent
      }
    ]
  }
  // {
  //   path: 'solicitacao-concluida',
  //   children: [
  //     {
  //       path: '',
  //       component: SolicitacaoConcluidaComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
