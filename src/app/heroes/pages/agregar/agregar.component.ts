import {Component, OnInit} from '@angular/core';
import {Hero, Publisher} from "../../interfaces/heroes.interface";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC comics',
      desc: 'DC- Coomics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel Comics'
    }
  ]

  hero: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance:'',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.hero);
  }

}
