import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgettoERComponent } from './progetto-er.component';

describe('ProgettoERComponent', () => {
  let component: ProgettoERComponent;
  let fixture: ComponentFixture<ProgettoERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgettoERComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgettoERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
