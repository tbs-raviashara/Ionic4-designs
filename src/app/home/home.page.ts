import { Component } from '@angular/core';
import { FileEncryption } from '@ionic-native/file-encryption/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(public fileEncryption: FileEncryption) { }

  ionViewWillEnter() {
    this.fileEncryption.decrypt('../../assets/msgstore-2019-08-07.1.db.crypt12', '').then(success => { console.log('success', success); }).catch(Error => { console.log('Error', Error); });
  }
}
