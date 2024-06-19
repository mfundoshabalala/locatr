import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapSearchBarComponent } from '../map-search-bar/map-search-bar.component';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'lib-map-display-panel',
  standalone: true,
  imports: [CommonModule, MapSearchBarComponent, MapComponent],
  templateUrl: './map-display.component.html',
  styleUrl: './map-display.component.css',
})
export class MapDisplayComponent implements OnInit {
  ngOnInit(): void {
    console.log('MapDisplayComponent initialized');
  }
}
