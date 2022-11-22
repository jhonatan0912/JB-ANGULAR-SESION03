import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {


  interes: any = 0;
  montoTotal: any = 0;
  cuota: any = 0;

  calcular(capital: HTMLInputElement, tasa: HTMLInputElement, periodo: HTMLInputElement) {


    this.interes = parseInt(capital.value) * parseFloat(tasa.value) * parseInt(periodo.value)

    this.montoTotal = parseInt(capital.value) + parseInt(this.interes)

    this.cuota = parseInt(this.montoTotal) / parseInt(periodo.value)

    return false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
