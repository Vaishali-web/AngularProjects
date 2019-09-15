import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
  selectedpane: number;
  constructor() { }

  ngOnInit() {
    this.selectedpane = 1;

  } 
  
  changepane(pane: number){
   
      this.selectedpane = pane;
  }

}
