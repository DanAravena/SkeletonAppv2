import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BdserviceService } from '../services/bdservice.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {
  arregloNotas: any = [
    {
      id:'',
      id_usuario:'',
      detalle:''
    }
  ]

  constructor(private router: Router, private servicioBD: BdserviceService){ }

  ngOnInit() {
    this.servicioBD.dbState().subscribe(res=>{
      if(res){
        this.servicioBD.fetchNota().subscribe(item=>{
          this.arregloNotas = item;
        })
      }
    })
  }

  obtenerTexto($event:any){
    const valor = $event.target.value;
    console.log("Texto escrito: "+ valor);
  }

  modificar(x: any){
    let navigationExtras: NavigationExtras ={
      state: {
        idEnviado: x.id,
        idUsuarioEnviado: x.id_usuario,
        detalleEnviado: x.detalle        
      }
    }
    this.router.navigate(['/modificar-nota'], navigationExtras);
  }

  eliminar(x: any){
    this.servicioBD.borrarNota(x.id);
    this.servicioBD.presentToast("Nota Eliminada");
  }

}
