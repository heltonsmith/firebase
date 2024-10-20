import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/firebase/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  user: any = null;  // Aquí guardamos los datos completos del usuario

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Suscribirse a los datos completos del usuario
    this.authService.authState$.subscribe((userData) => {
      this.user = userData;
      console.log('Datos completos del usuario:', this.user);
    });
  }

  logout() {
    this.authService.logout();  // Cerrar sesión
    this.router.navigate(['/home']);
  }

}
