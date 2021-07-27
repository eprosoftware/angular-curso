import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  visible: boolean = false;
  heroes: string[]=['Spiderman','Iroman','Hulk','Thor','Cápitan América'];
  heroeBorrado: string | undefined;
  
  borrarHeroe(){
    //this.heroes.pop();
    
    this.heroeBorrado = this.heroes.shift();
    console.log("Borrando :",this.heroeBorrado );
  }


}
