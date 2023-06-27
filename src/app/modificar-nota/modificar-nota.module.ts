import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarNotaPageRoutingModule } from './modificar-nota-routing.module';

import { ModificarNotaPage } from './modificar-nota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarNotaPageRoutingModule
  ],
  declarations: [ModificarNotaPage]
})
export class ModificarNotaPageModule {}
