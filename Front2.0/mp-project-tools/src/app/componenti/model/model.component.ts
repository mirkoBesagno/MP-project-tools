import { Component, Input, OnInit } from '@angular/core';
import { EntitaController } from 'src/app/model/typeorm/model/Controller';
import { AttributoModel, EntitaModello } from 'src/app/model/typeorm/model/Model';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  io: EntitaModello;
  @Input()
  public set Model(item: EntitaModello) {
    this.io = item;    
    this.nome=item.nome;
    this.nomeModello=item.nomeModello;
    this.path=item.path;
    this.listaAttributi=item.attributi;
    this.testoRisultato = item.testoRisultato;
  }
  nome: string;
   path: string;
   listaAttributi: AttributoModel[]
  nomeModello: string;
  testoRisultato: string;
  constructor() { }

  ngOnInit(): void {
  }

}
