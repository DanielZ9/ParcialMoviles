import { Component, OnInit } from '@angular/core';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  public data = JSON.parse(window.localStorage['data'] || '[]');

  constructor() {}

  ngOnInit(): void {
    
  }

}
