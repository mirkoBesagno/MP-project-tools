import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAttributoEntitaComponent } from './lista-attributo-entita.component';

describe('ListaAttributoEntitaComponent', () => {
  let component: ListaAttributoEntitaComponent;
  let fixture: ComponentFixture<ListaAttributoEntitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAttributoEntitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAttributoEntitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
