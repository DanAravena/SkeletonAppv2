import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
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

  arregloNotasSF: any = [
    {
      id:'',
      id_usuario:'',
      detalle:''
    }
  ]

  id_usuario= 0;
  nombre= "";
  apellido= "";
  mail= "";
  nivel_educ= "";
  clave= "";
  usuario= "";

  constructor(private activedRouter: ActivatedRoute, private router: Router, private servicioBD: BdserviceService){ 
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
    this.servicioBD.dbState().subscribe(res=>{
      if(res){
        this.servicioBD.fetchNota().subscribe(item=>{
          this.arregloNotasSF = item;
          for(let i = 0; i <  this.arregloNotasSF.length; i++) {
            if( this.arregloNotasSF[i].id_user === this.id_usuario) {
              this.arregloNotas.push(this.arregloNotasSF[i]); 
            }
          }                   
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
        idUsuarioEnviado: this.id_usuario,
        detalleEnviado: x.detalle        
      }
    }
    this.router.navigate(['/modificar-nota'], navigationExtras);
  }

  eliminar(x: any){
    this.servicioBD.borrarNota(x.id);
    this.servicioBD.presentToast("Nota Eliminada");
    this.router.navigate(['/home']);
  }

  agregar(){
    let navigationExtras: NavigationExtras ={
      state: {
        idEnviado: this.id_usuario,
        nombreEnviado:this.nombre,
        apellidoEnviado: this.apellido,
        mailEnviado: this.mail,
        nivel_educEnviado: this.nivel_educ,
        claveEnviado: this.clave,
        usuarioEnviado: this.usuario    
      }
    }
    this.router.navigate(['/agregar-nota'], navigationExtras);
  }

}
