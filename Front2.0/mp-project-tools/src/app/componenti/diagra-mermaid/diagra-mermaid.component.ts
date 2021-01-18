import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Output, EventEmitter, ViewChildren, Input } from '@angular/core';
import mermaid from 'mermaid';

//const { htmlToText } = require('html-to-text');
import {htmlToText} from "html-to-text";

@Component({
  selector: 'app-diagra-mermaid',
  templateUrl: './diagra-mermaid.component.html',
  styleUrls: ['./diagra-mermaid.component.css']
})
export class DiagraMermaidComponent implements OnInit {

  private _testoEr: string;

  @Input() set testoER(item: string) {
    this._testoEr = item;

    mermaid.initialize(this.config);
    const element: any = this.mermaidElement.nativeElement;
    const graphDefinition = htmlToText(item, {
      wordwrap: null
    });
    mermaid.render('graphDiv', graphDefinition, (svgCode,
      bindFunctions) => {
      element.innerHTML = svgCode;
      bindFunctions(element);
    });

  }

  // inside component file
  @ViewChildren('mermaid') mermaidElement: ElementRef = new ElementRef("");
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

  constructor() { }

  ngOnInit(): void {

    mermaid.initialize(this.config);
    const element: any = this.mermaidElement.nativeElement;
    const graphDefinition =  this.testoProva;
    mermaid.render('graphDiv', graphDefinition, (svgCode,
      bindFunctions) => {
      element.innerHTML = svgCode;
      bindFunctions(element);
    });
  }

}
