import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobreElProyectoComponent } from './componentes/paginas/sobre-el-proyecto/sobre-el-proyecto.component';
import { HomeComponent } from './componentes/paginas/home/home.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'sobreElProyecto', component: SobreElProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
