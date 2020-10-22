import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() hero:any = {};
  @Input() idx: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private _router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe() {
    this.heroeSeleccionado.emit( this.idx );
  }

}
