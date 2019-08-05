import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './componentes/interfaz/menus/menu-principal/menu-principal.component';
import { HomeComponent } from './componentes/paginas/home/home.component';
import { SobreElProyectoComponent } from './componentes/paginas/sobre-el-proyecto/sobre-el-proyecto.component';
import { CrudComponent } from './componentes/librerias/firebase/crud/crud.component';
import { Ng2PrismComponent } from './componentes/librerias/ng2-prism/ng2-prism.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    HomeComponent,
    SobreElProyectoComponent,
    CrudComponent,
    Ng2PrismComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
