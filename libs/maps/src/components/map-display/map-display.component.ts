import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapSearchInputComponent } from '../map-search-input/map-search-input.component';
import { MapViewComponent } from '../map-viewer/map-viewer.component';
import { MapButtonPanelComponent } from '../map-button-panel/map-button-panel.component';
import { MapInfoPanelComponent } from '../map-info-panel/map-info-panel.component';

@Component({
  selector: 'lib-map-display-panel',
  standalone: true,
  imports: [CommonModule, MapSearchInputComponent, MapViewComponent, MapButtonPanelComponent, MapInfoPanelComponent],
  templateUrl: './map-display.component.html',
  styleUrl: './map-display.component.css',
})
export class MapDisplayComponent implements OnInit {
  ngOnInit(): void {
    console.log('MapDisplayComponent initialized');
  }
}
