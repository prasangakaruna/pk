import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  constructor() { }

  mainTitle = 'Hi Prasanga Karunanayake';
  whatIami = "UI/UX Engineer"

  ngOnInit() {
  }

}
