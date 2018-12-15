import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeaconsPage } from './beacons';

@NgModule({
  declarations: [
    BeaconsPage,
  ],
  imports: [
    IonicPageModule.forChild(BeaconsPage),
  ],
})
export class BeaconModel {
  uuid: string;
  major: number;
  minor: number;
  rssi: number;
  proximity: string;
  constructor(public beacon: any) {
    this.uuid = beacon.uuid;
    this.major = beacon.major;
    this.minor = beacon.minor;
    this.rssi = beacon.rssi;
    this.proximity = beacon.proximity; 
  }
}
