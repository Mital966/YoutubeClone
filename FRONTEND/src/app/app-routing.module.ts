import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RightLoginComponent } from './right-login/right-login.component';
import { ForgotEmailComponent } from './forgot-email/forgot-email.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [{ path: 'login', component: RightLoginComponent },
    {path:'forgot-email',component:ForgotEmailComponent}],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
