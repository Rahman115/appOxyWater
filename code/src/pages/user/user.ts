import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the UserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
}) 
export class UserPage {

	aksesLogin :boolean = false;
  message: any = null;

	//bgPicture: any = "assets/img/bg_user.png";
	profilePicture: any = "assets/img/no_foto.jpg";
  identitas: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //window.location.reload();
    this.storage.get('myStore').then((val) => {
      //var url = "http://localhost/oxy/db_access_mobile.php?page=user&id=" + val ;
      //console.log('Your age is', url);
      http.get(url)
      .map(res => res.json())
      .subscribe(data => {
        
        this.identitas = data.result;
        if(this.identitas[0].alamat == "") {
          message = "Pilih update, untuk mengisi alamat anda !";
        }
      }) // end http
    }); // end storange
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  getPoin(){
let alert = this.alertCtrl.create({
      title: 'Poin Anda',
      subTitle: 'Silahkan belanja untuk mendapatkan poin kami',
      buttons: ['OK']
    });
    alert.present();

  }

  getSetting(){
let alert = this.alertCtrl.create({
      title: 'Settings',
      subTitle: 'Anda siap untuk seting',
      buttons: ['OK']
    });
    alert.present();
  }

  getInfo(){
  	let alert = this.alertCtrl.create({
      title: 'Tentang Oxy Water!',
      subTitle: 'Oxy water merupakan jasa produksi iar dan mengantarnya sampai ke rumah anda !',
      buttons: ['OK']
    });
    alert.present();
  
  }

    getLogOut(){

	let confirm = this.alertCtrl.create({
      title: 'Keluar aplikasi?',
      message: 'Anda akan keluar dari aplikasi ini?',
      buttons: [
        {
          text: 'Kembali',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Keluar',
          handler: () => {
            //console.log('Agree clicked');
            this.aksesLogin = true;
		      this.storage.clear();
		    window.location.reload();
          }
        }
      ]
    });
    confirm.present();
  }

}
