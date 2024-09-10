import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-googlemap',
  standalone: true,
  imports: [GoogleMapsModule, CommonModule],
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit{
  ngOnInit(): void {
    let isBrowser = typeof window !== 'undefined' && !!window.navigator;
    if (isBrowser && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((loc) => {
        this.center = {lat: loc.coords.latitude, lng: loc.coords.longitude}
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 10;
  display: any;

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}