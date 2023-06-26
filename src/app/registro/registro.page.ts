import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public alertButtons = ['OK'];

  constructor(private activerouter: ActivatedRoute, private router: Router, private alertController: AlertController) { }

  registrar(){
      this.router.navigate(['/perfil'])
  }

  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Saludos!',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
