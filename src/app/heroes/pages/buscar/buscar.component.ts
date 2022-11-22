import {Component, OnInit} from '@angular/core';
import {Hero} from "../../interfaces/heroes.interface";
import {HeroesService} from "../../services/heroes.service";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  query: string = '';

  heroes : Hero[] = [];

  selectedHero!: Hero | undefined;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  searching() {
    this.heroesService.getSuggestion(this.query.trim())
      .subscribe(heroes => this.heroes = heroes)
  }

  selectedOption (event : MatAutocompleteSelectedEvent){
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }
    const hero: Hero = event.option.value;
    this.query = hero.superhero;
    this.heroesService.getHeroById(hero.id!).subscribe(hero => this.selectedHero = hero);
  }
}
