import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-pdf-demo',
  templateUrl: './pdf-demo.page.html',
  styleUrls: ['./pdf-demo.page.scss'],
})
export class PdfDEmoPage {
  loading: any;

  constructor(private file: File,
    private fileOpener: FileOpener) { }

  exportPdf() {
    const div = document.getElementById("printable-area");
    const options = { background: "white", height: div.clientWidth, width: div.clientHeight };
    domtoimage.toPng(div, options).then((dataUrl) => {
      console.log(dataUrl);
      //Initialize JSPDF
      var doc = new jsPDF("p", "mm", "a4");
      //Add image Url to PDF
      doc.addImage(dataUrl, 'PNG', 20, 20);

      let pdfOutput = doc.output();
      // using ArrayBuffer will allow you to put image inside PDF
      let buffer = new ArrayBuffer(pdfOutput.length);
      let array = new Uint8Array(buffer);
      for (var i = 0; i < pdfOutput.length; i++) {
        array[i] = pdfOutput.charCodeAt(i);
      }

      console.log(buffer);
      //This is where the PDF file will stored , you can change it as you like
      // for more information please visit https://ionicframework.com/docs/native/file/
      const directory = this.file.externalRootDirectory;
      const fileName = "invoice.pdf";
      let options: IWriteOptions = { replace: true };

      this.file.checkFile(directory, fileName).then((success) => {
        //Writing File to Device
        this.file.writeFile(directory, fileName, buffer, options)
          .then((success) => {
            console.log("File created Succesfully" + JSON.stringify(success));
            this.fileOpener.open(this.file.externalRootDirectory + fileName, 'application/pdf')
              .then(() => console.log('File is opened'))
              .catch(e => console.log('Error opening file', e));
          })
          .catch((error) => {
            console.log("Cannot Create File " + JSON.stringify(error));
          });
      })
        .catch((error) => {
          //Writing File to Device
          this.file.writeFile(directory, fileName, buffer)
            .then((success) => {
              console.log("File created Succesfully" + JSON.stringify(success));
              this.fileOpener.open(this.file.externalRootDirectory + fileName, 'application/pdf')
                .then(() => console.log('File is opened'))
                .catch(e => console.log('Error opening file', e));
            })
            .catch((error) => {
              console.log("Cannot Create File " + JSON.stringify(error));
            });
        });
    })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }
}
