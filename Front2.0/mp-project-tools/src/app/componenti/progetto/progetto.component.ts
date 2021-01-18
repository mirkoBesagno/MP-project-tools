import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Output, EventEmitter, ViewChildren } from '@angular/core';
import { EntitaController } from 'src/app/model/typeorm/model/Controller';
import { EntitaModello } from 'src/app/model/typeorm/model/Model';
import { ProgettoModel } from '../../model/progetto.model';
import { Entita } from '../entita/entita.component';
import mermaid from 'mermaid';

@Component({
  selector: 'app-progetto',
  templateUrl: './progetto.component.html',
  styleUrls: ['./progetto.component.css']
})
export class ProgettoComponent implements AfterViewInit {

  testoEr:string="";

  pathProgetto: string;
  pathProgettoChanged(value: string) {
    this.pathProgetto = value;
  }

  nomeProgetto: string;
  nomeProgettoChanged(value: string) {
    this.nomeProgetto = value;
  }

  listaEntita: string[] = [];

  entitaSelezionata: Entita;

  static progetto: ProgettoModel;
  constructor() {
    this.nomeProgetto = "";
    this.pathProgetto = "C:/Users/mirko/Documents/Progetti nodejs/autogen";

  }
  esisteProgetto: boolean = false;

  /* ngOnInit(): void {
  } */
  ngAfterViewInit(): void {
  }

  CreaProgetto() {
    const data: Date = new Date(Date.now());
    ProgettoComponent.progetto = new ProgettoModel(this.pathProgetto,
      this.nomeProgetto,
      data);
    // this.listaEntita = ProgettoComponent.progetto.listaEntita;
    this.controller = ProgettoComponent.progetto.typeorm.controller.listaEntitaController;
    this.model = ProgettoComponent.progetto.typeorm.model.listaEntitaModello;
    this.esisteProgetto = true;

  }
  addEntita(item: Entita) {

    ProgettoComponent.progetto.typeorm.AggiungiEntita_model_repository_controller(
      item.nomeEntita, item.listaAttributi
    );
    ProgettoComponent.progetto.AggiungiEntita(item);
    this.listaEntita = ProgettoComponent.progetto.GetListaNomiEntita();

  }
  selezionaEntita(nome: string) {
    ProgettoComponent.progetto.listaEntita.forEach(element => {
      if (element.nomeEntita == nome) {
        this.entitaSelezionata = element;
      }
    });
  }
  generaEr(){
    this.testoEr = "classDiagram  "+'</br>'+ ProgettoComponent.progetto.GetEntitaPerDiagrammaEr();

  }
  /* AggiungiEntita() {

    ProgettoComponent.progetto.typeorm.AggiungiEntita_model_repository_controller(
      ProgettoComponent.progetto.nome, this.listaAttributi
    ); */
  controller: EntitaController[];
  model: EntitaModello[];

}
