import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientInterface } from '@profolio/interfaces';
import { AbstractFormComponent } from '@profolio/core';
import { BasicInputComponent, BasicTextAreaComponent, DropDownComponent, FormButtonsComponent, SearchBoxComponent } from '@profolio/frontend/shared/ui';

@Component({
  selector: 'lib-client-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchBoxComponent,
    FormButtonsComponent,
    BasicInputComponent,
    BasicTextAreaComponent,
    DropDownComponent,
  ],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css',
})
export class ClientFormComponent extends AbstractFormComponent<ClientInterface> {
  protected override createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      businessHours: [],
      website: '',
      notes: '',
      services: [],
      contact: this.fb.group({
        name: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.email],
      }),
      sites: this.fb.array([
        this.fb.group({
          name: ['', Validators.required],
          description: '',
          address: ['', Validators.required],
          latitude: [0, Validators.required],
          longitude: [0, Validators.required],
        }),
      ]),
    });
  }

  get sites(): FormArray {
    return this.entityForm.get('sites') as FormArray;
  }

  addSite(): void {
    const entity = this.fb.group({
      name: ['', Validators.required],
      description: '',
      address: ['', Validators.required],
      latitude: [0, Validators.required],
      longitude: [0, Validators.required]
    });
    this.sites.push(entity);
  }

  removeSite(index: number): void {
    this.sites.removeAt(index);
  }

  protected override initializeForm(entity: ClientInterface): void {
    if (entity) {
      this.entityForm.patchValue(entity);
      if (entity.sites) {
        this.sites.clear();
        for (const site of entity.sites) {
          this.sites.push(this.fb.group(site));
        }
      }
    }
  }

  onPlaceChange(index: number, place: google.maps.places.PlaceResult): void {
    const site = this.sites.at(index) as FormGroup;
    site.patchValue({
      address: place.formatted_address,
      latitude: place.geometry?.location?.lat(),
      longitude: place.geometry?.location?.lng(),
    });
  }
}
