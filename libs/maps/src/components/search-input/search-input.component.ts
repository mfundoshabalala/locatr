import { Component, ElementRef, Input, ViewChild, AfterViewInit, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AutoComplete, PlaceResult, PlacesLibrary } from '../../interfaces/places.interface';

@Component({
  selector: 'lib-search-input',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule],
  template: `
    <div class="search-wrapper">
      <input [placeholder]="placeholder" #inputField class="search-input" />
    </div>
  `,
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent implements AfterViewInit {
  @ViewChild('inputField') inputField!: ElementRef;
  @Input() placeholder = 'Enter address...';
  private readonly placeSignal = signal<PlaceResult | undefined>(undefined);

  // Expose the signal to the parent component
  get placeChangedSignal(): Signal<PlaceResult | undefined> {
    return this.placeSignal;
  }

  private autocomplete: AutoComplete | undefined;

  ngAfterViewInit() {
    this.initAutocomplete();
  }

  private async initAutocomplete() {
    const { Autocomplete } = (await google.maps.importLibrary('places')) as PlacesLibrary;
    this.autocomplete = new Autocomplete(this.inputField.nativeElement);
    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete?.getPlace();
      this.placeSignal.set(place);
    });
  }
}
