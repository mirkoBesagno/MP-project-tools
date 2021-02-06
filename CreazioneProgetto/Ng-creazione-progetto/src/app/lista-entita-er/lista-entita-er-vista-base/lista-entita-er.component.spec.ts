import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEntitaErComponent } from './lista-entita-er.component';

describe('ListaEntitaErComponent', () => {
  let component: ListaEntitaErComponent;
  let fixture: ComponentFixture<ListaEntitaErComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEntitaErComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEntitaErComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
