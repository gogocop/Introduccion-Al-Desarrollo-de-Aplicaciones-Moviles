import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  cantidadDolares: number = 0;  // Inicializa cantidadDolares con un valor por defecto
  equivalenteQuetzales: number = 0;
  errorMensaje: string = '';  // Inicializa errorMensaje con un valor por defecto

  convertirAQuetzales() {
    if (isNaN(this.cantidadDolares) || this.cantidadDolares <= 0) {
      this.errorMensaje = 'Por favor, ingrese una cantidad válida.';
      return;
    }

    const tasaCambio = 8;
    this.equivalenteQuetzales = this.cantidadDolares * tasaCambio;
    this.errorMensaje = ''; // Limpiar el mensaje de error si la conversión es exitosa
  }

  constructor() {}
}