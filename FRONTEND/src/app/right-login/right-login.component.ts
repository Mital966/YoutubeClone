import { Component, OnInit } from '@angular/core';
import { PatternValidator } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-right-login',
  templateUrl: './right-login.component.html',
  styleUrls: ['./right-login.component.scss']
})
export class RightLoginComponent implements OnInit {

  pattern: PatternValidator = new PatternValidator;

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

  validateEmail(){
    let val = $("#input").val();
    this.pattern.pattern="";
  }

 
}
