import { Component } from '@angular/core';
import { NavParams, NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { User } from '../../Model/user';
import { AngularFireAuth } from "angularfire2/auth";
//import { Login } from "../login/login.module";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user = {} as User;
  constructor(private afAuth: AngularFireAuth,

    public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
      alert("User created");
      this.navCtrl.push('Login');
    }
    catch (e) {
      console.error(e);
      alert(e);
    }
  }
}
