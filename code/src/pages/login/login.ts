import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	public registrationForm:FormGroup;
	setData;
	//tabsPage : TabsPage;
	//public tabsPage: TabsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	//this.;
  	this.registrationForm = this.formBuilder.group({
  		"username" : ["", Validators.compose([
  				Validators.required,
  				Validators.minLength(5),
  				Validators.maxLength(25),
  				Validators.pattern('^[a-zA-Z\. ]+$')
  			])],

  		"password" : ["", Validators.compose([
  				Validators.required,
  				Validators.minLength(4),
  				Validators.maxLength(20),
  				Validators.pattern('^[a-zA-z\. ]+$')
  			])]
  	});
  	// Cek auntetikasi dari database
  	this.storage.get('myStore').then((data) => {
  		if(data != null){
  			this.navCtrl.push(TabsPage);
  			window.location.reload();
  		}
  	});
  }

  logForm()  {
  	this.setData = this.registrationForm.value;

  	let e = Md5(this.setData.password);
  	//console.log(e);

  	var url = "http://localhost/oxy/db_access_mobile.php?page=cekLoginAdmin&id=" + e;

  	this.http.get(url).map(res => res.json()).subscribe(data => {
  		console.log(data.result);
  		if(data.result[0].id == 0 ){
  			console.log("Anda belum terdaftar");
  		} else  {
  			this.storage.get('myStore').then((val) => {
		    
		      let array = [];
		      array.push(data.result[0].md5);
		      this.storage.set('myStore', array);
		    	this.navCtrl.push(TabsPage);
		  });
  		}
  	});

  }
  
  saveLogin(user,pass) {
  	console.log(user);
  	console.log(pass);
  }

  goSignup(){
  	this.navCtrl.push(SignupPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
