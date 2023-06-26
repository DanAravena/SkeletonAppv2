import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  usuarioHome: string = "";

  nombre: string = "Usuario";
  apellido: string = "Prueba";
  email: string = "usuario@mail.cl";
  nivelEstudios: string = "Universario";
  fechaNacimiento: string = "1992-06-08";

  constructor(private activerouter: ActivatedRoute, private router: Router){}

  perfil(){
    this.router.navigate(['/perfil'])
  }  
  
  notas(){
    this.router.navigate(['/notas'])
  }  
  
  ngOnInit() {
  }
}
