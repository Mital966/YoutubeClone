import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  times: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.times = Array.from({ length: 20 }, (_, i) => i + 1);
  }

}
