import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagrammaMermaidVistaBaseComponent } from './diagramma-mermaid-vista-base.component';

describe('DiagrammaMermaidVistaBaseComponent', () => {
  let component: DiagrammaMermaidVistaBaseComponent;
  let fixture: ComponentFixture<DiagrammaMermaidVistaBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagrammaMermaidVistaBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagrammaMermaidVistaBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
