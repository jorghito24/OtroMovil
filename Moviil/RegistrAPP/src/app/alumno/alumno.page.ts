import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  constructor(private barcodeScanner:BarcodeScanner) { }

  scan(){
    this.barcodeScanner.scan().then((barcodeData) =>{
      alert("barcode data = " + barcodeData.text);
    },(err) => {
      alert(JSON.stringify(err));
    })
  }

  ngOnInit() {
  }

}