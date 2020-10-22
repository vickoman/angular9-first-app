import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService} from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string = "";
  constructor(private activatedRouter: ActivatedRoute,
      private _heroesService: HeroesService,
      private _router: Router
    ) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe(params => {
      this.termino = params["termino"];
      this.heroes = this._heroesService.buscarHeroes(this.termino);
      console.log(this.heroes);
    });
  }

  verHeroe(idx: number) {
    this._router.navigate(['/heroe', idx]);
  }

}
