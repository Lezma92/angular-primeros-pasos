import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases';

  contador: number = 1;

  public incrementarDecrementar(valor: number): void{
    this.contador = this.contador + valor;
  }

  public restartContador(): void{
    this.contador = 0;
  }
}
