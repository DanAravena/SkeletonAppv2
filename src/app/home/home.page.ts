import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

      id= 0;
      nombre= "";
      apellido= "";
      mail= "";
      nivel_educ= "";
      clave= "";
      usuario= "";

  constructor(private activedRouter: ActivatedRoute, private router: Router){
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.id = this.router.getCurrentNavigation()?.extras?.state?.['idEnviado'];
        this.nombre = this.router.getCurrentNavigation()?.extras?.state?.['nombreEnviado'];
        this.apellido = this.router.getCurrentNavigation()?.extras?.state?.['apellidoEnviado'];
        this.mail = this.router.getCurrentNavigation()?.extras?.state?.['mailEnviado'];
        this.nivel_educ = this.router.getCurrentNavigation()?.extras?.state?.['nivel_educEnviado'];
        this.clave = this.router.getCurrentNavigation()?.extras?.state?.['claveEnviado'];
        this.usuario = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
      }
    })
  }

  perfil(){
    let navigationExtras: NavigationExtras ={
      state: {
        idEnviado: this.id,
        nombreEnviado:this.nombre,
        apellidoEnviado: this.apellido,
        mailEnviado: this.mail,
        nivel_educEnviado: this.nivel_educ,
        claveEnviado: this.clave,
        usuarioEnviado: this.usuario    
      }
    }
    this.router.navigate(['/perfil'], navigationExtras);
  }  
  
  notas(){
    let navigationExtras: NavigationExtras ={
      state: {
        idEnviado: this.id,
        usuarioEnviado: this.usuario    
      }
    }
    this.router.navigate(['/notas'], navigationExtras);
  }  
  
  ngOnInit() {
  }
}
