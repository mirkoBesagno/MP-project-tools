import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Output, EventEmitter, ViewChildren, Input } from '@angular/core';
import mermaid from 'mermaid';

//const { htmlToText } = require('html-to-text');
import { htmlToText } from "html-to-text";

@Component({
  selector: 'app-diagra-mermaid',
  /* queries: {
    mermaid: new ViewChild( "mermaid" )
  }, */
  templateUrl: './diagra-mermaid.component.html',
  styleUrls: ['./diagra-mermaid.component.css']
})
export class DiagraMermaidComponent implements OnInit {

  constructor() { }
  private _testoEr: string;

  id='';
  @Input() set numeroId(item: string) {
    this.id = item;
  }
  @Input() set testoER(item: string) {
    if (item != undefined && item != '' && item != "classDiagram ") {
      this._testoEr = item;

      //mermaid.initialize(this.config);
      const element: any = document.getElementById('graficoER'+this.id);
      const graphDefinition = htmlToText(item, {
        wordwrap: null
      });
      try {

        mermaid.render('graphDiv'+this.id, graphDefinition, (svgCode,
          bindFunctions) => {
          element.innerHTML = svgCode;
          bindFunctions(element);
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


  ngOnInit(): void {

    mermaid.initialize(this.config);
  }

}
