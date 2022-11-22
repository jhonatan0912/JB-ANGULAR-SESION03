import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {

  total: Number = 0;
  promedio: Number = 0
  mayor: any
  menor: any

  calcular(compra1: HTMLInputElement, compra2: HTMLInputElement, compra3: HTMLInputElement, compra4: HTMLInputElement) {

    let shop1 = parseInt(compra1.value)
    let shop2 = parseInt(compra2.value)
    let shop3 = parseInt(compra3.value)
    let shop4 = parseInt(compra4.value)

    this.total = shop1 + shop2 + shop3 + shop4

    this.promedio = (shop1 + shop2 + shop3 + shop4) / 4

    this.mayor = Math.max(shop1, shop2, shop3, shop4)

    this.menor = Math.min(shop1, shop2, shop3, shop4)

    return false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
