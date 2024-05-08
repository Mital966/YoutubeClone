import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#sign").html("Enter your Password");
    $("#loginMsg").html("Enter your phone number or recovery email");
  }

  loadInputBorder(){
    $('#text').removeAttr('hidden');
    $('#btarget').addClass('input-border');
    $('#input').removeAttr('placeholder');
  
  }

}
