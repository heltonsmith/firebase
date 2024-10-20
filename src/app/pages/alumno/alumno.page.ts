import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/firebase/auth.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  user: any = null;  // Aquí guardamos los datos completos del usuario

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Suscribirse a los datos completos del usuario
    this.authService.authState$.subscribe((userData) => {
      this.user = userData;
      console.log('Datos completos del usuario:', this.user);
    });
  }
}
