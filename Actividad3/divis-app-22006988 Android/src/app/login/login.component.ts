import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';


  constructor(private router: Router) {}

  login() {
    // Aquí implementa la lógica real de inicio de sesión
    // Puedes verificar las credenciales y navegar a la página principal si son correctas
    if (this.username === 'usuario' && this.password === 'contraseña') {
      this.router.navigate(['/home']);
    } else {
      // Manejo de error de inicio de sesión
      console.log('Credenciales incorrectas');
    }
  }
}
