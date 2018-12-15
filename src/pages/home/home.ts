import { Component } from '@angular/core';
import { Platform, Events, NavParams, NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { BeaconProvider } from '../../providers/beacon-provider/beacon-provider';
import { NgZone } from "@angular/core";
import { BeaconModel } from '../../beacons/beacons.module';
import { isString } from 'ionic-angular/umd/util/util';
import { Observable } from 'rxjs/Rx';
import { getValueFromFormat } from 'ionic-angular/umd/util/datetime-util';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  beacons: BeaconModel[] = [];
  zone: any;
  beaconMajors: any = [];
  isConnected: boolean; isConnected2: boolean;
  myBeacon: any;
  mySelBeacon: any;
  nameMajor: any;
  nameTry: any = "hello buddy";
  mybeaconnum: any;
  myselectvalue: any;
  beacon123: any;
  myTryName: String = "Sikandar";
  i: any;
  constructor(public navCtrl: NavController, public platform: Platform,
    public beaconProvider: BeaconProvider, public events: Events,
    public alertCtrl: AlertController, public NavParam: NavParams) {
    // required for UI update
    this.zone = new NgZone({ enableLongStackTrace: false });
    this.isConnected = false;
    this.beacon123 = 'beacon3';
    this.myBeacon = '---Select Beacon---';
    this.mySelBeacon = NavParam.get("beacon123");
    //this.beaconMajors = [390,490];
    //this.beaconMajors = this.beacons.map;
    Observable.interval(200 * 60).subscribe(x => {
      // this.optionsFn();
      if (this.beaconMajors.length === 0) {
        this.isConnected = false;
      }
      else {
        for (this.i = 0; this.i < this.beaconMajors.length; this.i++) {
          if (this.beaconMajors[this.i] == (this.myBeacon)) {
            this.isConnected = true;
            //this.i++;
          }
          else if(this.beaconMajors[this.i] != (this.myBeacon)) 
            this.isConnected = false;
            //this.i++; 
        }
      }
    });
  }
  public checkConnection(): void {
    this.isConnected2 = false;
  }
  public optionsFn(): void { //here item is an object 
    console.log(this.myBeacon);
    
      let alert = this.alertCtrl.create({
        title: 'Beacon Connection',
        subTitle: 'You are connected!',
        buttons: ['Dismiss']
      });
      alert.present();
    let connectedBeacon = this.beacons; // Just did this in order to avoid changing the next lines of code :P
    if (this.myBeacon === null) {
      this.isConnected = false;
    }
    if (this.myBeacon === '---Select Beacon---') {
      this.isConnected = false;
    }
    else {
      this.isConnected = true;
    }
  }
  public optionsFn1(): void {
    console.log(this.mybeaconnum);
    this.mySelBeacon = this.NavParam.get('beacon123');
    if (this.mybeaconnum === null) {
      this.isConnected2 = false;
    }
    if (this.beacon123 === 'beacon3') {
      this.isConnected2 = false;
    }
    else {
      this.isConnected2 = true;
    }
  }
  doConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.beaconProvider.initialise().then((isInitialised) => {
        if (isInitialised) {
          this.listenToBeaconEvents();
        }
      });
    });
  }

  listenToBeaconEvents() {
    this.events.subscribe('didRangeBeaconsInRegion', (data) => {

      // update the UI with the beacon list
      this.zone.run(() => {

        this.beacons = [];
        this.beaconMajors = [];

        let beaconList = data.beacons;
        beaconList.forEach((beacon) => {
          let beaconObject = new BeaconModel(beacon);
          let beaconMajor = beaconObject.major;
          this.beacons.push(beaconObject);
          this.beaconMajors.push(beaconMajor);
        });

      });

    });
  }
}

