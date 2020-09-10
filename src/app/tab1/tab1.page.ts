import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  data = [
    {
      name: '¿Tienes malestar o dolor de garganta?',
      selected: false
    },
    {
      name: '¿Tienes sensación de malestar general?',
      selected: false
    },
    {
      name: '¿Tienes sensación de fatiga o cansancio muscular?',
      selected: false
    },
    {
      name: '¿Tienes fiebre? (+38°C)',
      selected: false
    },
    {
      name: '¿Tienes tos seca y persistente?',
      selected: false
    },
    {
      name: '¿Dificultad para respirar?',
      selected: false
    },
    {
      name: '¿Tienes secreciones o congestión nasales?',
      selected: false
    },
    {
      name: '¿Tienes pérdida del olfato y/o el gusto?',
      selected: false
    },
    {
      name: '¿Vives con alguien sospechoso o confirmado de tener COVID-19?',
      selected: false
    },
    {
      name: '¿En los últimos 14 días tuvo contacto con alguien',
      name2: 'sospechoso o confirmado de tener COVID-19?',
      selected: false
    }
  ];

  constructor() {}

  ngOnInit(){
    
  }

  tomarData(){
    console.log(this.data); 
  }

}
