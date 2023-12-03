import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [IonicModule, FormsModule], // Elimina la coma adicional aquí
  exports: [LoginComponent] // Asegúrate de exportar LoginComponent si es necesario
})
export class LoginModule {}
