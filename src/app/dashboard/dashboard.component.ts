import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // Importa la interfaz Hero desde su archivo correspondiente
import { HeroService } from '../hero.service'; // Importa el servicio HeroService desde su archivo correspondiente

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []; // Declara una propiedad heroes que es un array de objetos Hero

  constructor(private heroService: HeroService) { } // Inyecta el servicio HeroService en el constructor

  ngOnInit(): void {
    this.getHeroes(); // Llama al método getHeroes cuando se inicializa el componente
  }

  getHeroes(): void {
    this.heroService.getHeroes() // Utiliza el servicio HeroService para obtener la lista de héroes
      .subscribe(heroes => this.heroes = heroes.slice(0, 3)); // Asigna los primeros 3 héroes obtenidos al array heroes
  }
}
