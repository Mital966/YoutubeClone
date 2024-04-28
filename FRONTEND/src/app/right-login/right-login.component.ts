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
  }

  loadInputBorder(){
    $('btarget').addClass("input-border");
    alert("reached");
  }
}
