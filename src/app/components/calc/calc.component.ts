import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  result: any;
  firstNum: any;
  secondNum: any;
  constructor() { }

  ngOnInit(): void {
  }
  calc(firstNumber: HTMLInputElement, secondNumber: HTMLInputElement) {
    this.firstNum = parseInt(firstNumber.value)
    this.secondNum = parseInt(secondNumber.value);

    this.result = this.firstNum + this.secondNum;
  }
}
