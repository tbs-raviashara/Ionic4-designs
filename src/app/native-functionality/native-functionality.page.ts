import { Component, OnInit } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-native-functionality',
  templateUrl: './native-functionality.page.html',
  styleUrls: ['./native-functionality.page.scss'],
})
export class NativeFunctionalityPage {
  public folderName = "LoginDemo";
  public fileName = "demo.text";
  constructor(public actionCtrl: ActionSheetController, private imagePicker: ImagePicker, public camera: Camera, public file: File) { }

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

  chooseMultipleImages() {
    let options = {
      quality: 100,
      outputType: 1
    };
    this.imagePicker.getPictures(options).then((results) => {
      for (let i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }

  changeImage(val: any) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: val,
      allowEdit: true
    };
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
    }, (err) => {
      console.log(err);
    });
  }

}
