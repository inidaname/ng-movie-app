import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  listNumber: number[] = [
    1,
    2,
    3,
    4,
    5,
    6
  ]

  constructor() { }

  ngOnInit() {
  }

}
