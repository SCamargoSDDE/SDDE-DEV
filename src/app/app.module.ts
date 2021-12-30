import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FaqComponent } from './components/faq/faq.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

/*Import para formularios*/
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationOkComponent } from './components/registration-ok/registration-ok.component';
import { FirstStartComponent } from './components/first-start/first-start.component';
import { DirectorioComponent } from './components/directorio/directorio.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService } from './services/api.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FaqComponent,
    ProgramsComponent,
    AdminLayoutComponent,
    LoginComponent,
    RegisterComponent,
    RegistrationOkComponent,
    FirstStartComponent,
    DirectorioComponent,
    EventosComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
