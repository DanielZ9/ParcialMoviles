import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  informacion = JSON.parse(window.localStorage['data'] || '[]');
  

  data = [

    {
      pregunta: '¿Tienes malestar o dolor de garganta?',
      selected: false
    },
    {
      pregunta: '¿Tienes sensación de malestar general?',
      selected: false
    },
    {
      pregunta: '¿Tienes sensación de fatiga o cansancio muscular?',
      selected: false
    },
    {
      pregunta: '¿Tienes fiebre? (+38°C)',
      selected: false
    },
    {
      pregunta: '¿Tienes tos seca y persistente?',
      selected: false
    },
    {
      pregunta: '¿Dificultad para respirar?',
      selected: false
    },
    {
      pregunta: '¿Tienes secreciones o congestión nasales?',
      selected: false
    },
    {
      pregunta: '¿Tienes pérdida del olfato y/o el gusto?',
      selected: false
    },
    {
      pregunta: '¿Vives con alguien sospechoso o confirmado de tener COVID-19?',
      selected: false
    },
    {
      pregunta: '¿En los últimos 14 días tuvo contacto con alguien',
      pregunta2: 'sospechoso o confirmado de tener COVID-19?',
      selected: false
    }
  ];

  constructor() {}

  ngOnInit(){
    
  }

  guardarData(){
    //this.informacion.push(this.data);
    console.log(this.informacion); 
    //window.localStorage['data'] = JSON.stringify(this.informacion); 
  }

   sacarData(){

   }

}
