import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoDelMesComponent } from './empleado-del-mes.component';

describe('EmpleadoDelMesComponent', () => {
  let component: EmpleadoDelMesComponent;
  let fixture: ComponentFixture<EmpleadoDelMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoDelMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoDelMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
