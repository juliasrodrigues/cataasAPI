import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pag1PageRoutingModule } from './pag1-routing.module';

import { Pag1Page } from './pag1.page';
import { GatoComponent } from "../gato/gato.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pag1PageRoutingModule,
    GatoComponent
],
  declarations: [Pag1Page]
})
export class Pag1PageModule {}
