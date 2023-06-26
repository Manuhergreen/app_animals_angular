import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaComponent } from './pages/lista/lista.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { CartaComponent } from './pages/lista/carta/carta.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path: "",component:HomeComponent },
  {path: "lista", component:ListaComponent, canActivate: [AuthGuard]},
  {path: "gestion", component:GestionComponent, canActivate: [AuthGuard]},
  {path: "lista/:id", component: CartaComponent, canActivate: [AuthGuard]},
  {path: "registro", component: RegisterComponent},
  {path: "login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
