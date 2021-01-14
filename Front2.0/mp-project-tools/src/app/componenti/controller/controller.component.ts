import { Component, Input, OnInit } from '@angular/core';
import { AttributoController, Controller, EntitaController } from 'src/app/model/typeorm/model/Controller';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  io: EntitaController;
  @Input()
  public set Controller(item: EntitaController) {
    this.io = item;
    this.attributi = item.attributi;
    this.nome=item.nome;
    this.testoRisultato =item.testoRisultato;    
  }

  attributi: AttributoController[];
  nome: string;
  testoInterface: string = "";
  testoBody: string = "";
  testoRisultato: string;

  constructor() {

  }

  ngOnInit(): void {
  }



}
