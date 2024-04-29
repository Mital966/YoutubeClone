import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-right-login',
  templateUrl: './right-login.component.html',
  styleUrls: ['./right-login.component.scss']
})
export class RightLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#sign").html("Sign in");
    $("#loginMsg").html("to continue to YouTube");
  }

  loadInputBorder(){
    $('#text').removeAttr('hidden');
    $('#btarget').addClass('input-border');
    $('#input').removeAttr('placeholder');
   
  }

 
}
