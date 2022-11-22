import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {


  interes: any
  montoTotal: any
  cuota: any

  calcular(capital: HTMLInputElement, tasa: HTMLInputElement, periodo: HTMLInputElement) {

    this.interes = parseInt(capital.value) * parseInt(tasa.value) * parseInt(periodo.value)

    this.montoTotal = parseInt(capital.value) + this.interes

    this.cuota = this.montoTotal / parseInt(periodo.value)

    return false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
