import { Component } from '@angular/core';
import { NavParams, NavController, AlertController, LoadingController, Loading, IonicPage} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../Model/user';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  user = {} as User;
  constructor(private afAuth: AngularFireAuth,

    public navCtrl: NavController, public navParams: NavParams) {
  }
  state = false;


  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      this.navCtrl.push('HomePage');
    }
    catch (e) {
      console.log(e);
      alert(e); 
    }
  }

  register() {
    this.navCtrl.push('SignupPage');
  }

}
