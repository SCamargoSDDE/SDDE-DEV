import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsEmprendimientoRoutingModule } from './forms-emprendimiento-routing.module';
import { FormsEmprendimientoComponent } from './forms-emprendimiento.component';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';
import { FormThreeComponent } from './form-three/form-three.component';

/*Import para formularios*/
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormFourComponent } from './form-four/form-four.component';
import { FormFiveComponent } from './form-five/form-five.component';

@NgModule({
  declarations: [
    FormsEmprendimientoComponent,
    FormOneComponent,
    FormTwoComponent,
    FormThreeComponent,
    FormFourComponent,
    FormFiveComponent
  ],
  imports: [
    CommonModule,
    FormsEmprendimientoRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class FormsEmprendimientoModule { }
