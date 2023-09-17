import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tablas';
  mostrar = '';
  multi: String[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  mostrarTabla(event: any): void {
    // Obtén el elemento HTML donde deseas mostrar la tabla
    const tabla = document.getElementById('mostrarTabla');

    // Limpia el contenido HTML del elemento
    if (tabla) {
      tabla.innerHTML = '';
    }

    const numeros = parseInt(event.target.value);

    // Genera y muestra la nueva tabla
    let mostrar = '';
    for (let i = 1; i < 11; i++) {
      let resultado = numeros * i;
      console.log(resultado);
      mostrar += `${numeros} x ${i} = ${resultado}<br>`;
    }

    // Agrega la tabla generada al elemento HTML
    if (tabla) {
      tabla.innerHTML = mostrar;
    }
  }

}
