import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributoEntitaComponent } from './attributo-entita.component';

describe('AttributoEntitaComponent', () => {
  let component: AttributoEntitaComponent;
  let fixture: ComponentFixture<AttributoEntitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributoEntitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributoEntitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
