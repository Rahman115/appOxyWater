import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PesanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesan',
  templateUrl: 'pesan.html',
})
export class PesanPage {

	idKategori:any;
	subkategori:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	idKategori = navParams.get("kat");

  	getShowSubkategori(this.idKategori);

  }

  getShowSubkategori(id){
  	var url = "http://localhost/oxy/db_access_mobile.php?page=subkategori&id="+id;

  	http.get(url)
  		.map(res => res.json())
  		.subscribe(data => {
  			console.log(data.result);
  			subkategori = data.result;
  		})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesanPage');
  }

}
