import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public heroes: Hero[] = [];

  constructor( private heroesService: HeroesService ) {}

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe( heroes => this.heroes = heroes );
  }
}
