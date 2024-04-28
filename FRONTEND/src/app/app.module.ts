import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RightLoginComponent } from './right-login/right-login.component';
import { ForgotEmailComponent } from './forgot-email/forgot-email.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RightLoginComponent,
    ForgotEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
