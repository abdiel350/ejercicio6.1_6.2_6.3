import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { DetallePage } from './detalle.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: DetallePage }])
  ],
  declarations: [DetallePage]
})
export class DetallePageModule {}
