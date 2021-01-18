import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagraMermaidComponent } from './diagra-mermaid.component';

describe('DiagraMermaidComponent', () => {
  let component: DiagraMermaidComponent;
  let fixture: ComponentFixture<DiagraMermaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagraMermaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagraMermaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
