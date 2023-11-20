import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cantidadQuetzales: number = 0;  // Inicializa cantidadQuetzales con un valor por defecto
  equivalenteDolares: number = 0;
  errorMensaje: string = '';  // Inicializa errorMensaje con un valor por defecto

  convertirADolares() {
    if (isNaN(this.cantidadQuetzales) || this.cantidadQuetzales <= 0) {
      this.errorMensaje = 'Por favor, ingrese una cantidad válida.';
      return;
    }

    const tasaCambio = 8;
    this.equivalenteDolares = this.cantidadQuetzales / tasaCambio;
    this.errorMensaje = ''; // Limpiar el mensaje de error si la conversión es exitosa
  }

  constructor() {}
}
