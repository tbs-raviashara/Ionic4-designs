import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PdfDEmoPage } from './pdf-demo.page';

const routes: Routes = [
  {
    path: '',
    component: PdfDEmoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PdfDEmoPage]
})
export class PdfDEmoPageModule {}
