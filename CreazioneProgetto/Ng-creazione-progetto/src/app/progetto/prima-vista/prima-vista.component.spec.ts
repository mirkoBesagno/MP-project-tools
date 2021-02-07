import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaVistaProgettoComponent } from './prima-vista.component';

describe('PrimaVistaComponent', () => {
  let component: PrimaVistaProgettoComponent;
  let fixture: ComponentFixture<PrimaVistaProgettoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaVistaProgettoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaVistaProgettoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
