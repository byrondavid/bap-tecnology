import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeRouteComponent } from './components/home-route/home-route.component';
import { ProductoComponent } from './components/producto-bap/producto/producto/producto.component';
import { ClienteFormComponent } from './components/cliente/cliente-form/cliente-form.component';

import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { AddServicioComponent } from './components/add-servicio/add-servicio.component';



const routes: Routes = [
  {
    path: 'login', component:LoginComponent
  },
  {path:'registrarse', component:ClienteFormComponent},
  {
    path :'',component:HomeRouteComponent,
      children: [
      {
        path: 'producto',component:ProductoComponent
      },
      {
        path:'home', component:HomeComponent
      },
      {
        path:'servicios',component:ServiciosComponent,
        children :[
          {
            path:'addservicio',component:AddServicioComponent
          }
        ]
      },
      { path: '**', pathMatch: 'full', redirectTo: 'home' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
