/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel importar

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
  
  
})
export class AppModule { }*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule, // Importa el módulo BrowserModule para habilitar la ejecución de la aplicación en un navegador
    FormsModule, // Importa el módulo FormsModule para habilitar la vinculación de datos de formularios en Angular
    AppRoutingModule // Importa el módulo de enrutamiento AppRoutingModule para gestionar las rutas de la aplicación
  ],
  declarations: [
    AppComponent, // Declara el componente AppComponent
    DashboardComponent, // Declara el componente DashboardComponent
    HeroesComponent, // Declara el componente HeroesComponent
    HeroDetailComponent, // Declara el componente HeroDetailComponent
    MessagesComponent // Declara el componente MessagesComponent
  ],
  bootstrap: [ AppComponent ] // Indica que el componente raíz de la aplicación es AppComponent
})
export class AppModule { } // Define el módulo raíz de la aplicación, llamado AppModule
