import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private readonly iconMap: Record<string, string> = {
    // Professional Services
    accounting: 'file-invoice-dollar',
    lawyer: 'gavel',
    insurance_agency: 'shield-alt',
    electrician: 'bolt',
    plumber: 'wrench',
    roofer: 'house-damage',
    moving_company: 'truck',
    // ...other mappings

    // Default
    default: 'map-marker-alt',
  };

  getIcon(type: string): string {
    return this.iconMap[type] || this.iconMap['default'];
  }
}
