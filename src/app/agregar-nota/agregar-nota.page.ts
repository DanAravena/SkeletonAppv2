import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BdserviceService } from '../services/bdservice.service';

@Component({
  selector: 'app-agregar-nota',
  templateUrl: './agregar-nota.page.html',
  styleUrls: ['./agregar-nota.page.scss'],
})
export class AgregarNotaPage implements OnInit {
  detalle = "";
  id_usuario= 0;
  nombre= "";
  apellido= "";
  mail= "";
  nivel_educ= "";
  clave= "";
  usuario= "";

  constructor(private activedRouter: ActivatedRoute, public router:Router, private db: BdserviceService) { 
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.id_usuario = this.router.getCurrentNavigation()?.extras?.state?.['idEnviado'];
        this.nombre = this.router.getCurrentNavigation()?.extras?.state?.['nombreEnviado'];
        this.apellido = this.router.getCurrentNavigation()?.extras?.state?.['apellidoEnviado'];
        this.mail = this.router.getCurrentNavigation()?.extras?.state?.['mailEnviado'];
        this.nivel_educ = this.router.getCurrentNavigation()?.extras?.state?.['nivel_educEnviado'];
        this.clave = this.router.getCurrentNavigation()?.extras?.state?.['claveEnviado'];
        this.usuario = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
      }
    })
  }

  ngOnInit() {
  }

  insertar(){
    this.db.insertarNota(this.id_usuario, this.detalle);
    this.db.presentToast("Nota Agregada");
    this.router.navigate(['/notas']);
  }

}
