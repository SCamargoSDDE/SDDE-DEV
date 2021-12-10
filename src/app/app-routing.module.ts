import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { RegisterComponent } from './components/register/register.component';

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
    path:'**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
