import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public nombresHeroes: string[] = ['SpiderMan', 'Hulk', 'Batman'];

  public heroeDelete?: string = '';
  public comidaDelete?: string = '';

  public platillos: string[] = [
    'Chilaquiles',
    'Carne de Puerco',
    'Enchiladas',
    'Mole',
  ];

  public listaAnimales: string[] = ['Perro', 'Gato', 'Delfin', 'Araña', 'Leon'];

  public eliminarHeroe(): void {
    this.heroeDelete = this.nombresHeroes.pop();
  }
  public eliminarComida(): void {
    this.comidaDelete = this.platillos.pop();
  }
}
