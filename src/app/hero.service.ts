import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Importa Observable y of desde RxJS para trabajar con datos asíncronos
import { Hero } from './hero'; // Importa la interfaz Hero desde su archivo correspondiente
import { HEROES } from './mock-heroes'; // Importa la constante HEROES que contiene datos de héroes ficticios
import { MessageService } from './message.service'; // Importa el servicio MessageService desde su archivo correspondiente

@Injectable({
  providedIn: 'root', // Indica que este servicio estará disponible en toda la aplicación
})
export class HeroService {

  constructor(private messageService: MessageService) { } // Inyecta el servicio MessageService en el constructor

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); // Crea un observable a partir del array de héroes ficticios HEROES
    this.messageService.add('HeroService: fetched heroes'); // Agrega un mensaje al servicio de mensajes indicando que se han obtenido los héroes
    return heroes; // Retorna el observable de héroes
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!; // Busca un héroe en la lista de héroes ficticios según su ID
    this.messageService.add(`HeroService: fetched hero id=${id}`); // Agrega un mensaje al servicio de mensajes indicando que se ha obtenido un héroe específico
    return of(hero); // Retorna un observable del héroe encontrado
  }
}
