import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaVistaComponent } from './prima-vista.component';

describe('PrimaVistaComponent', () => {
  let component: PrimaVistaComponent;
  let fixture: ComponentFixture<PrimaVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
