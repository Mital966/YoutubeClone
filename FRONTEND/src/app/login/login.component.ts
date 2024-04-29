import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


   
  constructor() { }

  ngOnInit(): void {
    $("#sign").html("Sign in");
    $("#loginMsg").html("to continue to YouTube");
    
  }

}
