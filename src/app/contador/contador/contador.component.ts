
import { Component } from '@angular/core';

@Component({
    selector:'app-contador',
    template: `
    <h1>{{ title }}</h1>
<h2>La base es <strong>{{ base }}</strong></h2>

<button (click)="acumular(base)"> + 1</button>
<span>Contador: {{ numero }}</span>
<button (click)="acumular(-base)"> - 1</button>
    `

})
export class ContadorComponent {
    title = 'Contador App';

    numero = 10;
    base = 5;
  
    acumular(cantidad:number){
      this.numero +=cantidad;
    }
}