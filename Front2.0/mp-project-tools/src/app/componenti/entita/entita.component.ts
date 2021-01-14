import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AttributoModel } from '../../model/typeorm/model/Model';
import { ProgettoComponent } from '../progetto/progetto.component';

@Component({
  selector: 'app-entita',
  templateUrl: './entita.component.html',
  styleUrls: ['./entita.component.css']
})
export class EntitaComponent implements AfterViewInit {

  tiopoEntita: string;
  nomeEntita: string;

  listaAttributi: AttributoModel[] = [];

  tipoAttributo: string;
  tipologiaAttributo: string;
  nomeAttributo: string;


  constructor() {
    this.nomeAttributo="";
    this.nomeEntita="";
    this.tiopoEntita="";
    this.tipoAttributo="";
    this.tipologiaAttributo="";
   }

  ngAfterViewInit(): void {

  }
  /* ngOnInit(): void {
  } */

  @Output() newEntita = new EventEmitter<boolean>();
  AggiungiEntita() {

    ProgettoComponent.progetto.typeorm.AggiungiEntita_model_repository_controller(
      ProgettoComponent.progetto.nome, this.listaAttributi
    );
    this.newEntita.emit(true);
  }
  /* AggiungiEntita() {

    ProgettoComponent.progetto.typeorm.AggiungiEntita_model_repository_controller(
      ProgettoComponent.progetto.nome, this.listaAttributi
    );

  } */
  AggiungiAttributo() {
    this.listaAttributi.push(new AttributoModel(this.nomeAttributo,
      this.tipoAttributo,
      this.tipologiaAttributo));

  }
}
