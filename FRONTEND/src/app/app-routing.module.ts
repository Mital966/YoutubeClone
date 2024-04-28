import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RightLoginComponent } from './right-login/right-login.component';

const routes: Routes = [{ path: 'login', component: LoginComponent ,
  children:[
    {path:'right-login', component:RightLoginComponent}
  ]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
