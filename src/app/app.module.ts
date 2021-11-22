import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BotonComponent } from './components/boton/boton.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { ItemTareaComponent } from './components/item-tarea/item-tarea.component';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BotonComponent,
    TareaComponent,
    ItemTareaComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library:FaIconLibrary){
    library.addIconPacks(fas,far)
  }
}
