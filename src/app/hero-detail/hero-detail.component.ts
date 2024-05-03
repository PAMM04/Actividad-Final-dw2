import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero'; // Importa la interfaz Hero desde su archivo correspondiente
import { HeroService } from '../hero.service'; // Importa el servicio HeroService desde su archivo correspondiente

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined; // Declara una propiedad hero de tipo Hero o undefined

  constructor(
    private route: ActivatedRoute, // Inyecta ActivatedRoute para acceder a los parámetros de la URL
    private heroService: HeroService, // Inyecta HeroService para obtener datos de los héroes
    private location: Location // Inyecta Location para interactuar con la ubicación del navegador
  ) {}

  ngOnInit(): void {
    this.getHero(); // Llama al método getHero cuando se inicializa el componente
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Obtiene el ID del héroe de los parámetros de la URL
    this.heroService.getHero(id) // Utiliza el servicio HeroService para obtener el héroe con el ID especificado
      .subscribe(hero => this.hero = hero); // Asigna el héroe obtenido a la propiedad hero
  }

  goBack(): void {
    this.location.back(); // Navega hacia atrás en la historia del navegador
  }
}
