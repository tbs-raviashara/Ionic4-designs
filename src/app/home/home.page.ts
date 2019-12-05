import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DemoModalPage } from '../demo-modal/demo-modal.page';
// import { FileEncryption } from '@ionic-native/file-encryption/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(public modal: ModalController) { }

  ionViewWillEnter() {
    // this.fileEncryption.decrypt('../../assets/msgstore-2019-08-07.1.db.crypt12', '').then(success => { console.log('success', success); }).catch(Error => { console.log('Error', Error); });
  }

  showRegisterPage() {
    this.modal.create({
      component: DemoModalPage,
      cssClass: 'my-custom-demo-modal-css'
    }).then((modalCtrl: any) => {
      modalCtrl.present();
    });
  }
}
