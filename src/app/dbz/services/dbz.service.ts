import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      idPersonaje: uuid(),
      name: 'Veguetta',
      power: 700,
    },
    {
      idPersonaje: uuid(),
      name: 'Goku',
      power: 254,
    },
    {
      idPersonaje: uuid(),
      name: 'Bulma',
      power: 45200,
    },
    {
      idPersonaje: uuid(),
      name: 'Buu',
      power: 2500,
    },
    {
      idPersonaje: uuid(),
      name: 'Freezzer',
      power: 4500,
    },
    {
      idPersonaje: uuid(),
      name: 'Piccolo',
      power: 4500,
    }
  ];

  public recibirPersonaje(personaje: Character): void {
    this.characters.push({ idPersonaje: uuid(), ...personaje });
  }
  public recibirEliminado(idPersonaje: string): void {
    this.characters = this.characters.filter(personaje => personaje.idPersonaje !== idPersonaje);
  }
}
