import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdserviceService } from '../services/bdservice.service';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.page.html',
  styleUrls: ['./not-found-page.page.scss'],
})
export class NotFoundPagePage implements OnInit {

  constructor(private router: Router, private servicio: BdserviceService) { }

  ngOnInit() {
  }

  login(){
    this.servicio.limpiarBDNotas();
    this.servicio.presentToast("BD notas vacia");
    this.router.navigate(['/login']);    
  }

}
