import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{ counter }}</p>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy()">reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy(increase: number = 10): void {
    increase==10?this.counter=increase:this.counter+=increase;
  }

}
