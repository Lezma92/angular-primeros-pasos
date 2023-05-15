import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-page-main',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent implements OnInit {
  constructor(private dbzService: DbzService) {}

  ngOnInit() {}

  public get listaPersonajesService(): Character[]{
    return [...this.dbzService.characters];
  }
  public eliminarPersonaje(idPersonaje: string): void{
    this.dbzService.recibirEliminado(idPersonaje);
  }

  public onPersonaje(personaje:  Character): void {
    this.dbzService.recibirPersonaje(personaje);
  }


}
