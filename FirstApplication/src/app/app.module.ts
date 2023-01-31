import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';


// import the DropDownListModule for the DropDownList component

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    MainComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
