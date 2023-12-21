import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children: [
      {
        path:'new-alumno',
        component: NewPageComponent
      },
      {
        path:'search',
        component: SearchPageComponent
      },
      {
        path:'inicio',
        component: InicioComponent
      },
      {
        path:'edit/:id',
        component: NewPageComponent
      },
      {
        path:'list',
        component: ListPageComponent
      },
      {
        path:':id',
        component: HeroPageComponent
      },
      {
        path:'**',
        redirectTo: 'inicio'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
