import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-formregister',
  templateUrl: './formregister.component.html',
  styleUrls: ['./formregister.component.css'],
})
export class FormregisterComponent {
  @Output()
  public emitiPersonaje: EventEmitter<Character> = new EventEmitter();

  public datos: Character = {
    name: '',
    power: 0,
  };

  public agregarPersonaje(): void {
    console.log(this.datos);
    if (this.datos.name.length === 0) return;
    this.emitiPersonaje.emit(this.datos);
    this.datos = {name: "", power: 0}
  }
}
