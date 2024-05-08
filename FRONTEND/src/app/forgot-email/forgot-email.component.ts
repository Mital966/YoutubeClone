import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-forgot-email',
  templateUrl: './forgot-email.component.html',
  styleUrls: ['./forgot-email.component.scss']
})
export class ForgotEmailComponent implements OnInit {
  @ViewChild('inputContainer')
  inputContainer!: ElementRef;
  @ViewChild('inputField')
  inputField!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    $("#sign").html("Find your email");
    $("#loginMsg").html("Enter your phone number or recovery email");
    
  }
 
  loadInputBorder(){
    $('#text').removeAttr('hidden');
    $('#btarget').addClass('input-border');
    $('#input').removeAttr('placeholder');
  
  }
 
   
}
