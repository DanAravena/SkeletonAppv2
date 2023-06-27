import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdserviceService } from '../services/bdservice.service';

@Component({
  selector: 'app-agregar-nota',
  templateUrl: './agregar-nota.page.html',
  styleUrls: ['./agregar-nota.page.scss'],
})
export class AgregarNotaPage implements OnInit {
  detalle = "";
  //modificar que use el id del usuario logeado
  id_usuario=0;

  constructor(public router:Router, private db: BdserviceService) { }

  ngOnInit() {
  }

  insertar(){
    this.db.insertarNota(this.id_usuario, this.detalle);
    this.db.presentToast("Nota Agregada");
    this.router.navigate(['/notas']);
  }

}
