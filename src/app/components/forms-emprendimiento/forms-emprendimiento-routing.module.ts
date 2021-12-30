import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormOneComponent } from './form-one/form-one.component';
import { FormThreeComponent } from './form-three/form-three.component';
import { FormTwoComponent } from './form-two/form-two.component';
import { FormsEmprendimientoComponent } from './forms-emprendimiento.component';

const routes: Routes = [
 
  { 
    path: '', 
    component: FormsEmprendimientoComponent,
    children:[
      { 
        path: 'formulario-uno', 
        component: FormOneComponent 
      },
    
      { 
        path: 'formulario-dos', 
        component: FormTwoComponent 
      },
      { 
        path: 'formulario-tres', 
        component: FormThreeComponent 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsEmprendimientoRoutingModule { }
