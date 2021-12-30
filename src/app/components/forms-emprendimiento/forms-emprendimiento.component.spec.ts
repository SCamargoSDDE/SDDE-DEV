import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsEmprendimientoComponent } from './forms-emprendimiento.component';

describe('FormsEmprendimientoComponent', () => {
  let component: FormsEmprendimientoComponent;
  let fixture: ComponentFixture<FormsEmprendimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsEmprendimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsEmprendimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
