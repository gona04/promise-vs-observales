import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { PromisesComponent } from './promises/promises.component';
import { HomeComponent } from './home/home.component';
import { DifferencesComponent } from './differences/differences.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'observable', component: ObservableComponent},
  {path: 'promises', component: PromisesComponent},
  {path:'differences', component: DifferencesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
