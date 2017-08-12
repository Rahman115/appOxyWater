import { Component } from 'angular4/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  aksesLogin :boolean = false;
  btnKategori : any;
  constructor(public navCtrl: NavController) {
    var url = "http://localhost/oxy/db_access_mobile.php?page=barang";
      //console.log('Your age is', url);
      this.http.get(url)
      .map(res => res.json())
      .subscribe(data => {
        //console.log()
        this.btnKategori = data.result;
        //if(this.identitas[0].alamat == "") {
          //this.message = "Pilih update, untuk mengisi alamat anda !";
        //}
      }) // end http
    this.storage.get('myStore').then((data) => {
      if(data == null){
        this.navCtrl.push(LoginPage);
        this.aksesLogin = true;
      }
    });
  }

  getLogin() {
  	// menuju loginPage
  	this.navCtrl.push(LoginPage);
  }

  getPesan(id) {

this.navCtrl.push(PesanPage, { kat : id});
  }



}
