import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AttributoModel } from '../../model/typeorm/model/Model';
import { ProgettoComponent } from '../progetto/progetto.component';

@Component({
  selector: 'app-entita',
  templateUrl: './entita.component.html',
  styleUrls: ['./entita.component.css']
})
export class EntitaComponent implements AfterViewInit {

  @ViewChild('tiopoEntita') tiopoEntita: ElementRef;

  @ViewChild('tipoAttributo') tipoAttributo: ElementRef;
  @ViewChild('tipologiaAttributo') tipologiaAttributo: ElementRef;
  @ViewChild('nomeAttributo') nomeAttributo: ElementRef;

  @ViewChild('nomeEntita') nomeEntita: ElementRef;

  listaAttributi: AttributoModel[] = [];

  constructor() { }

  ngAfterViewInit(): void {

  }
  /* ngOnInit(): void {
  } */
  AggiungiEntita() {

    ProgettoComponent.progetto.typeorm.AggiungiEntita_model_repository_controller(
      ProgettoComponent.progetto.nome, this.listaAttributi
    );
  }
  AggiungiAttributo(){
    this.listaAttributi.push(new AttributoModel(this.nomeAttributo.nativeElement.value,
      this.tipoAttributo.nativeElement.value,
      this.tipologiaAttributo.nativeElement.value));

  }
}
