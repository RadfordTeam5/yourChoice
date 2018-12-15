import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Login } from './login';
import { AngularFireAuth } from 'angularfire2/auth';
@NgModule({
  declarations: [
    Login
  ],
  imports: [
    IonicPageModule.forChild(Login),
  ],
})
export class LoginPageModule { }
