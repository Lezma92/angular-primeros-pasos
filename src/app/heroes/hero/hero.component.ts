import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'Iron Man';
  public edad: number = 25;

  get capitalizarNombre(): string {
    return this.name.toUpperCase();
  }

  getDescripcionHeroe(): string {
    return this.name + ' - ' + this.edad;
  }

  public cambiarNombre(): void {
    this.name = 'SpiderMan';
  }

  public cambiarEdad(): void {
    this.edad = 26;
  }
  public resetInfo(): void {
    this.name = 'Iron Man';
    this.edad = 25;
  }
}
