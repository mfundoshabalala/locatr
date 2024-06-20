import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapSearchBarComponent } from '../map-search-bar/map-search-bar.component';
import { MapComponent } from '../map/map.component';
import { MapLegendComponent } from '../map-legend/map-legend.component';
import { MapInfoPanelComponent } from '../map-info-panel/map-info-panel.component';

@Component({
  selector: 'lib-map-display-panel',
  standalone: true,
  imports: [CommonModule, MapSearchBarComponent, MapComponent, MapLegendComponent, MapInfoPanelComponent],
  templateUrl: './map-display.component.html',
  styleUrl: './map-display.component.css',
})
export class MapDisplayComponent implements OnInit {
  ngOnInit(): void {
    console.log('MapDisplayComponent initialized');
  }
}
