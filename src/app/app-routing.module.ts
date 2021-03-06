import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path:"",
      redirectTo:"/login",
      pathMatch:"full"
    },
    {
      path:"login",
      loadChildren: () => import('./modules/login/login.module').then(m=>m.LoginModule)
    },
    {
      path:"student",
      loadChildren: () => import('./modules/student/student.module').then(m=>m.StudentModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
