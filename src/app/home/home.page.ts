import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DemoModalPage } from '../demo-modal/demo-modal.page';
import { File } from '@ionic-native/file/ngx';
// import { FileEncryption } from '@ionic-native/file-encryption/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(public modal: ModalController, public file: File) { }

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
  public folderName = "LoginDemo";
  public fileName = "demo.text";
  check_Folder() {
    this.file.checkDir(this.file.externalRootDirectory, this.folderName).then((response: any) => {
      console.log('Directory already created');
      if (response === true) {
        this.check_File();
      }
    }).catch((error: any) => {
      this.create_Directory();
    });
  }

  create_Directory() {
    this.file.createDir(this.file.externalRootDirectory, this.folderName, false).then((response: any) => {
      console.log('Directory Created Successfully');
      this.check_File();
    }).catch((err: any) => {
      console.log('Directory Not Created');
    });
  }

  check_File() {
    this.file.checkFile(this.file.externalRootDirectory + this.folderName + '/', this.fileName).then((response: any) => {
      console.log('File already created');
    }).catch((err: any) => {
      this.create_File();
    });
  }

  create_File() {
    this.file.createFile(this.file.externalRootDirectory + this.folderName, this.fileName, false).then((createFileRes: any) => {
      console.log('File Created Successfully');
    }).catch((createFileErr: any) => {
      console.log('File Not Created');
    });
  }
}