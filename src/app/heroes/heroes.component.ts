/*import {Component, OnInit} from '@angular/core';
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
    HeroDetailComponent
  ],
})

export class HeroesComponent implements OnInit {
  //heroes = HEROES;
  selectedHero?: Hero;
  heroes: Hero[] = [];
  //El parámetro define simultáneamente un heroServicepropiedad e identificarlo como un HeroServiceen el lugar de inyección.
  //Añadir un privado heroServiceparámetro de tipo HeroServicea la constructora.
  constructor(private heroService: HeroService, private messageService: MessageService)
{}
//Crear un método para recuperar a los héroes del servicio.
ngOnInit(): void {
  this.getHeroes();
}
onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
} 

getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}*/
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // Importa la interfaz Hero desde su archivo correspondiente
import { HeroService } from '../hero.service'; // Importa el servicio HeroService desde su archivo correspondiente

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []; // Declara una propiedad heroes que es un array de objetos Hero

  constructor(private heroService: HeroService) { } // Inyecta el servicio HeroService en el constructor

  ngOnInit(): void {
    this.getHeroes(); // Llama al método getHeroes cuando se inicializa el componente
  }

  getHeroes(): void {
    this.heroService.getHeroes() // Utiliza el servicio HeroService para obtener la lista de héroes
      .subscribe(heroes => this.heroes = heroes); // Asigna los héroes obtenidos al array heroes
  }
}
