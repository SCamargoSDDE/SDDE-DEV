import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/login.guard';
import { DirectorioComponent } from './components/directorio/directorio.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { FaqComponent } from './components/faq/faq.component';
import { FirstStartComponent } from './components/first-start/first-start.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { RegisterComponent } from './components/register/register.component';
import { RegistrationOkComponent } from './components/registration-ok/registration-ok.component';

const routes: Routes = [
  {
    path:'inicio',
    component: HomeComponent
  },
  {
    path:'programas',
    component: ProgramsComponent
  },
  {
    path:'faq',
    component: FaqComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'registro',
    component: RegisterComponent
  },
  {
    //Pagina de confirmacion de registro
    path:'registroOk',
    component: RegistrationOkComponent
  },
  {
    path:'perfilEcosistema',
    component: FirstStartComponent
  },
  {
    path:'directorio',
    component: DirectorioComponent
  },
  {
    path:'eventos',
    component: EventosComponent
  },
  {
    path:'noticias',
    component: NoticiasComponent
  },
  {
    path:'primerInicio',
    component: FirstStartComponent
  },

  { 
    path: 'emprendimiento', 
    //canActivate: [LoginGuard],
    loadChildren: () => import('./components/forms-emprendimiento/forms-emprendimiento.module').then(m => m.FormsEmprendimientoModule) },
  {
    path:'**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
