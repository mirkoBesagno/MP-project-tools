import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelloComponent } from './modello.component';

describe('ModelloComponent', () => {
  let component: ModelloComponent;
  let fixture: ComponentFixture<ModelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
