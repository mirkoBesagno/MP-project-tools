import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitaComponent } from './entita.component';

describe('EntitaComponent', () => {
  let component: EntitaComponent;
  let fixture: ComponentFixture<EntitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
