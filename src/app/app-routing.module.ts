import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatsFormComponent } from './layouts/cats-form/cats-form.component';
import { CatsComponent } from './layouts/cats/cats.component';
import { HomeComponent } from './layouts/home/home.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'cats', component:CatsComponent },
  { path: 'cats-form', component:CatsFormComponent },
  { path: 'cats-form/:id', component:CatsFormComponent },
  { path: 'not-found', component:NotFoundComponent },
  { path: '**', component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
