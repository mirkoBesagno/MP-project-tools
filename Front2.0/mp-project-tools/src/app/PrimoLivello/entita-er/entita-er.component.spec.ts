import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitaERComponent } from './entita-er.component';

describe('EntitaERComponent', () => {
  let component: EntitaERComponent;
  let fixture: ComponentFixture<EntitaERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntitaERComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitaERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
