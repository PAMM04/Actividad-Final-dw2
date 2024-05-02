import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel importar

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent //declaramos en el array el heroes component
  ],
  imports: [
    BrowserModule, //Importamos el form
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
  
  
})
export class AppModule { }
