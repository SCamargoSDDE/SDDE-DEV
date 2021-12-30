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

@NgModule({
  declarations: [
    FormsEmprendimientoComponent,
    FormOneComponent,
    FormTwoComponent,
    FormThreeComponent
  ],
  imports: [
    CommonModule,
    FormsEmprendimientoRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class FormsEmprendimientoModule { }
