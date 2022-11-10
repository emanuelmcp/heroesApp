import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Hero} from "../../interfaces/heroes.interface";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  hero!:Hero;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      ({id}) => console.log(id)
    );
  }



}
