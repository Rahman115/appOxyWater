import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

	nama: string;
	telp: string;
	username: string;
	password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  insertDataPelanggan(){
  	var headers = new Headers();

  	headers.append('Content-Type', 'application/x-www-form-urlencoded');
  	let options = new RequestOptions({ headers:headers});

  	//let e = Md5(this.setData.password);

  	let postParams = {
  		nama : nama,
  		telp : telp,
  		username : username,
  		password : password,
  		md5 : Md5(password)
  	};

  	var url = "http://localhost/oxy/db_access_mobile.php?page=insertPelanggan";
  	http.post(url, JSON.stringify(postParams), options)
  		.subscribe( data => {
  			//console.log(data['_body']);
  			//console.log(postParams['md5']);
  			
  			this.storage.get('myStore').then((val) => {
		    
		      let array = [];
		      array.push(postParams['md5']);
		      this.storage.set('myStore', array);
		    	this.navCtrl.push(TabsPage);
		  });
  			//this.navCtrl.push(TabsPage);

  		}, error => {
  			console.log(error); // getting the data
  		} );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
