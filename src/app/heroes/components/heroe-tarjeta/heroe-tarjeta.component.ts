import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../interfaces/heroes.interface";

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.scss'],
  styles: [`
    mat-card{
      margin-top: 20px;
    }
  `]
})
export class HeroeTarjetaComponent{

  @Input()
  hero!: Hero;

}
