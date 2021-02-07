import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import mermaid from 'mermaid';

//const { htmlToText } = require('html-to-text');
import { htmlToText } from "html-to-text";

@Component({
  selector: 'app-diagramma-mermaid-vista-base',
  templateUrl: './diagramma-mermaid-vista-base.component.html',
  styleUrls: ['./diagramma-mermaid-vista-base.component.css']
})
export class DiagrammaMermaidVistaBaseComponent implements AfterViewInit {

  /* @ViewChild(DiagrammaMermaid)
  set diagrammaMermaid(v: DiagrammaMermaid) {
    setTimeout(() => {
      this.testo = v.id;
    }, 0);
  } */

  @ViewChild("diagrammaER") diagrammaERView: ElementRef;

  constructor() { }
  private _testoEr: string;

  id = '';
  @Input() set numeroId(item: string) {
    debugger;
    this.id = item;
  }
  @Input() set testoER(item: string) {
    debugger;
    if (item != undefined && item != '' && item != "classDiagram ") {
      this._testoEr = item;

      //mermaid.initialize(this.config);
      //const element: any = document.getElementById('graficoER' + this.id);
      const graphDefinition = htmlToText(item, {
        wordwrap: null
      });
      try {

        mermaid.render('graphDiv' + this.id, graphDefinition, (svgCode,
          bindFunctions) => {
          this.diagrammaERView.nativeElement.innerHTML = svgCode;
          bindFunctions(this.diagrammaERView.nativeElement);
          /* element.innerHTML = svgCode;
          bindFunctions(element); */
        });
      } catch (error) {
        console.log("ERRORE !!!! sono mirko : " + error);
      }
    }
  }

  // inside component file
  config = {
    startOnLoad: true,
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      curve: 'cardinal',
    },
    securityLevel: 'loose',
  };
  testoProva = `classDiagram
  Animal <|--o Duck
  Animal <--* Fish : "quello che voglio"
  Animal <|-- Zebra
  Duck --|> Fish
  Fish --|> Duck
  Class07 .. Class08
  Class09 --> C2 : Where am i?
  Class09 --* C3`;


  /*ngOnInit(): void {

    mermaid.initialize(this.config);
  } */
  ngAfterViewInit() {
    mermaid.initialize(this.config);
    this.diagrammaERView.nativeElement.innerHTML = "Hello Angular 10!";
  }
}
