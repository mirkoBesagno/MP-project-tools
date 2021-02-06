import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitaErComponent } from './entita-er.component';

describe('EntitaErComponent', () => {
  let component: EntitaErComponent;
  let fixture: ComponentFixture<EntitaErComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntitaErComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitaErComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
