import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarNotaPage } from './modificar-nota.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarNotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarNotaPageRoutingModule {}
