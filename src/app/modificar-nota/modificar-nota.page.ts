import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BdserviceService } from '../services/bdservice.service';

@Component({
  selector: 'app-modificar-nota',
  templateUrl: './modificar-nota.page.html',
  styleUrls: ['./modificar-nota.page.scss'],
})
export class ModificarNotaPage implements OnInit {
  detalle = "";
  id="";
  id_usuario="";
  constructor(private router: Router, private activedRouter: ActivatedRoute, private servicio: BdserviceService) {
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.id = this.router.getCurrentNavigation()?.extras?.state?.['idEnviado'];
        this.id_usuario = this.router.getCurrentNavigation()?.extras?.state?.['idUsuarioEnviado'];
        this.detalle = this.router.getCurrentNavigation()?.extras?.state?.['detalleEnviado'];
      }
    })

   }

  ngOnInit() {
  }

  editar(){
    this.servicio.modificarNota(this.id,this.id_usuario,this.detalle);
    this.servicio.presentToast("Nota Actualizada");
    this.router.navigate(['/listar']);
  }

}
