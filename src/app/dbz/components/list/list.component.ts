import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {


  @Input()
  public characterList: Character[] = [
    {
      idPersonaje: "s",
      name: 'Trunks',
      power: 250,
    }
  ];

  @Output()
  public emitirEliminado: EventEmitter<string> = new EventEmitter();

  public eliminarPersonaje(idPersonaje?: string): void{
    if(!idPersonaje) return;
    this.emitirEliminado.emit(idPersonaje);
    console.log(idPersonaje);
  }
}
