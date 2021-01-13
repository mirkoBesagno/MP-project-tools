import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Progetto } from 'src/model/Progetto';

@Component({
  selector: 'app-progetto',
  templateUrl: './progetto.component.html',
  styleUrls: ['./progetto.component.css']
})
export class ProgettoComponent implements AfterViewInit {

  @ViewChild('pathProgetto') pathProgetto: ElementRef;
  @ViewChild('nomeProgetto') nomeProgetto: ElementRef;

  static progetto: Progetto;

  constructor() { }

  ngAfterViewInit(): void {

  }
  CreaProgetto()
  {
    const data: Date = new Date(Date.now());

    ProgettoComponent.progetto = new Progetto(this.pathProgetto.nativeElement.value,
      this.nomeProgetto.nativeElement.value,
      data);
  }
  /* ngOnInit(): void {
  } */

}
