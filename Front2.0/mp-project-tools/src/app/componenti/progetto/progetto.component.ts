import { Component, OnInit, ViewChild, AfterViewInit, ElementRef,Output, EventEmitter  } from '@angular/core';
import { EntitaController } from 'src/app/model/typeorm/model/Controller';
import { EntitaModello } from 'src/app/model/typeorm/model/Model';
import { ProgettoModel } from '../../model/progetto.model';

@Component({
  selector: 'app-progetto',
  templateUrl: './progetto.component.html',
  styleUrls: ['./progetto.component.css']
})
export class ProgettoComponent implements AfterViewInit {

  pathProgetto: string;
  pathProgettoChanged(value: string) {
    this.pathProgetto = value;
  }

  nomeProgetto: string;
  nomeProgettoChanged(value: string) {
    this.nomeProgetto = value;
  }

  static progetto: ProgettoModel;
  constructor() {
    this.nomeProgetto = "";
    this.pathProgetto = "C:/Users/mirko/Documents/Progetti nodejs/autogen";
  }
 esisteProgetto :boolean=false;

  /* ngOnInit(): void {
  } */
  ngAfterViewInit(): void {
  }

  CreaProgetto() {
    const data: Date = new Date(Date.now());
    ProgettoComponent.progetto = new ProgettoModel(this.pathProgetto,
      this.nomeProgetto,
      data);
this.esisteProgetto=true;

  }
  addEntita(item:any){
    if (item == true) {
      
    }
    this.controller = ProgettoComponent.progetto.typeorm.controller.listaEntitaController;
    this.model= ProgettoComponent.progetto.typeorm.model.listaEntitaModello;
  }
  /* AggiungiEntita() {

    ProgettoComponent.progetto.typeorm.AggiungiEntita_model_repository_controller(
      ProgettoComponent.progetto.nome, this.listaAttributi
    ); */
    controller:EntitaController[];
  model:EntitaModello[];

}
