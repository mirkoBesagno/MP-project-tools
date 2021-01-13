import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MermaidErComponent } from './mermaid-er.component';

describe('MermaidErComponent', () => {
  let component: MermaidErComponent;
  let fixture: ComponentFixture<MermaidErComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MermaidErComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MermaidErComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
