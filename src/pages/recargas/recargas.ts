import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker,
 //Spherical
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-recargas',
  templateUrl: 'recargas.html',
})
export class RecargasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation,
  public googleMaps: GoogleMaps, /*public spherical: Spherical*/) {
  }

  ionViewDidLoad(){
    this.getPosition();
  }

  getPosition():any{
    this.geolocation.getCurrentPosition().then(response => {
      this.loadMap(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  loadMap(position: Geoposition){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);
   
    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map');

    let map: GoogleMap = this.googleMaps.create(element);

    // create LatLng object
    let myPosition: LatLng = new LatLng(latitude,longitude);
    let PosicionPrueba1: LatLng = new LatLng(3.385508,-76.530872);

    // create CameraPosition
    let camaraPosition: CameraPosition<LatLng> = {
      target: myPosition,
      zoom: 18,
      tilt: 30
    };

  
  
  

    map.one(GoogleMapsEvent.MAP_READY).then(()=>{
      console.log('Map is ready!');

      // move the map's camera to position
      map.moveCamera(camaraPosition);

      // create new marker
      let markerOptions: MarkerOptions = {
        position: myPosition,
        title: 'Estas Aqui',
        animation: 'DROP'
      };

      let Prueba1: MarkerOptions = {
        title: 'Prueba 1',
        icon: 'green',
        animation: 'DROP',
        position: PosicionPrueba1
      };

      
     map.addMarker(markerOptions);

     map.addMarker(Prueba1);

     


    map.addMarker({
      title: 'Prueba 2',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 3.385456,
        lng: -76.530465
      }
    })

    map.setTrafficEnabled(true);
    map.setOptions(Option);
    





    });


   // this.spherical.computeDistanceBetween(myPosition, PosicionPrueba1)

    

  }

}


