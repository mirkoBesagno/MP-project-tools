import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ProgettoModel } from '../../model/progetto.model';

@Component({
  selector: 'app-progetto',
  templateUrl: './progetto.component.html',
  styleUrls: ['./progetto.component.css']
})
export class ProgettoComponent implements AfterViewInit {

  @ViewChild('pathProgetto') pathProgetto: ElementRef;
  @ViewChild('nomeProgetto') nomeProgetto: ElementRef;

  static progetto: ProgettoModel;
  constructor() { }

  /* ngOnInit(): void {
  } */
  ngAfterViewInit(): void {

  }

  CreaProgetto()
  {
    const data: Date = new Date(Date.now());

    ProgettoComponent.progetto = new ProgettoModel(this.pathProgetto.nativeElement.value,
      this.nomeProgetto.nativeElement.value,
      data);
  }
}
