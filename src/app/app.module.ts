import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ObservableComponent } from './observable/observable.component';
import { PromisesComponent } from './promises/promises.component';
import { HeaderComponent } from './header/header.component';
import { DifferencesComponent } from './differences/differences.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ObservableComponent,
    PromisesComponent,
    HeaderComponent,
    DifferencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
