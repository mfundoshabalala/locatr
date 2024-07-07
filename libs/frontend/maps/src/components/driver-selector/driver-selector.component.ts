import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectDropdownComponent } from '../multi-select-dropdown/multi-select-dropdown.component';
import { DriversInterface, AvailabilityStatus, DriverStatus } from '../../interfaces/entity.interface';

@Component({
  selector: 'lib-driver-selector',
  standalone: true,
  imports: [CommonModule, MultiSelectDropdownComponent],
  template: `
    <lib-multi-select [options]="driversOptions" formFieldName="drivers" prompt="Select driver"> </lib-multi-select>
  `,
  styleUrl: './driver-selector.component.css',
})
export class DriverSelectorComponent {
  driversOptions: DriversInterface[] = [
    {
      driversID: '1',
      name: 'John Doe',
      contactID: '101',
      contact: {
        contactID: 101,
        phoneNumber: '123-456-7890',
        email: 'john.doe@example.com',
      },
      licenseDetails: {
        licenseNumber: 'A123456789',
        expiryDate: new Date('2025-12-31'),
        class: 'B',
      },
      availability: 'available' as AvailabilityStatus,
      assignedVehicle: {
        id: 201,
        type: 'truck',
        capacity: 1000,
        currentLocation: { lat: -34.0, lng: 18.5 },
        status: 'available',
        maintenanceHistory: [],
      },
      currentLocation: { lat: -34.0, lng: 18.5 },
      skillsCertifications: ['Defensive Driving', 'Hazardous Materials'],
      schedule: {
        workingHours: '09:00-17:00',
        daysOff: ['Saturday', 'Sunday'],
        vacationDays: [],
        sickDays: [],
        trainingDays: ['2024-07-10'],
        onLeave: [],
        onRoute: ['2024-07-04'],
        offDuty: [],
        emergencyDays: [],
        otherDays: [],
      },
      history: [],
      status: 'active' as DriverStatus,
      emergencyContact: {
        name: 'Jane Doe',
        phoneNumber: '098-765-4321',
      },
    },
    {
      driversID: '2',
      name: 'Alice Smith',
      contactID: '102',
      contact: {
        contactID: 102,
        phoneNumber: '234-567-8901',
        email: 'alice.smith@example.com',
      },
      licenseDetails: {
        licenseNumber: 'B987654321',
        expiryDate: new Date('2026-06-30'),
        class: 'C',
      },
      availability: 'on route' as AvailabilityStatus,
      assignedVehicle: {
        id: 202,
        type: 'car',
        capacity: 500,
        currentLocation: { lat: -33.9, lng: 18.4 },
        status: 'in use',
        maintenanceHistory: [],
      },
      currentLocation: { lat: -33.9, lng: 18.4 },
      skillsCertifications: ['First Aid', 'Advanced Navigation'],
      schedule: {
        workingHours: '08:00-16:00',
        daysOff: ['Sunday'],
        vacationDays: ['2024-12-20', '2024-12-21'],
        sickDays: [],
        trainingDays: ['2024-08-15'],
        onLeave: [],
        onRoute: ['2024-07-05'],
        offDuty: [],
        emergencyDays: [],
        otherDays: [],
      },
      history: [],
      status: 'active' as DriverStatus,
      emergencyContact: {
        name: 'Robert Smith',
        phoneNumber: '123-987-6543',
      },
    },
    {
      driversID: '3',
      name: 'Carlos Johnson',
      contactID: '103',
      contact: {
        contactID: 103,
        phoneNumber: '345-678-9012',
        email: 'carlos.johnson@example.com',
      },
      licenseDetails: {
        licenseNumber: 'C135792468',
        expiryDate: new Date('2024-09-30'),
        class: 'D',
      },
      availability: 'off duty' as AvailabilityStatus,
      assignedVehicle: undefined,
      currentLocation: { lat: -34.1, lng: 18.3 },
      skillsCertifications: ['Hazardous Materials'],
      schedule: {
        workingHours: '10:00-18:00',
        daysOff: ['Saturday'],
        vacationDays: ['2024-11-15', '2024-11-16'],
        sickDays: ['2024-07-02'],
        trainingDays: ['2024-09-10'],
        onLeave: ['2024-08-20'],
        onRoute: ['2024-07-01'],
        offDuty: ['2024-07-03'],
        emergencyDays: [],
        otherDays: [],
      },
      history: [],
      status: 'inactive' as DriverStatus,
      emergencyContact: {
        name: 'Maria Johnson',
        phoneNumber: '456-789-0123',
      },
    },
  ];
}
