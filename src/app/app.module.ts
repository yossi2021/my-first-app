import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ListitemComponent } from './listitem/listitem.component';

@NgModule({
  declarations: [			
    AppComponent,
      MainComponent,
      TodolistComponent,
      ListitemComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
