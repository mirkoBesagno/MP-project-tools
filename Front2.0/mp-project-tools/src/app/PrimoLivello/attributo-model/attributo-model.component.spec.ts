import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributoModelComponent } from './attributo-model.component';

describe('AttributoModelComponent', () => {
  let component: AttributoModelComponent;
  let fixture: ComponentFixture<AttributoModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributoModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributoModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
