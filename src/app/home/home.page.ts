import { Component } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { DemoModalPage } from '../demo-modal/demo-modal.page';
import { File } from '@ionic-native/file/ngx';
// import { FileEncryption } from '@ionic-native/file-encryption/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(public camera: Camera, public modal: ModalController, public file: File, public actionCtrl: ActionSheetController) { }

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

  chooseOptions() {
    this.actionCtrl.create({
      header: 'Change Profile Picture',
      buttons: [{
        text: 'Remove',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Choose from Camera',
        icon: 'camera',
        handler: () => {
          this.changeImage(this.camera.PictureSourceType.CAMERA);
        }
      }, {
        text: 'Choose from Gallery',
        icon: 'images',
        handler: () => {
          this.changeImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {

        }
      }]
    }).then((actionSheet: any) => {
      actionSheet.present();
    });
  }

  changeImage(val: any) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: val
    };
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
    }, (err) => {
      console.log(err);
    });
  }
}