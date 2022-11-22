import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  am: Number | any = 0;
  ab: Number = 0;
  ahorroSemestral: Number = 0;
  aa: Number = 0;
  calcular(ingreso1: HTMLInputElement, ingreso2: HTMLInputElement, gastos: HTMLInputElement) {
    this.am = (parseInt(ingreso1.value) + parseInt(ingreso2.value)) - parseInt(gastos.value);
    this.ab = this.am * 2;
    this.ahorroSemestral = this.am * 6;
    this.aa = this.am * 12;
    return false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
