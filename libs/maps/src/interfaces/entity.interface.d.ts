// License interface
export interface LicenseInterface {
  licenseNumber: string;
  expiryDate: Date;
  class: string;
}

// Enum for availability status
export enum AvailabilityStatus {
  Available = "available",
  OnRoute = "on route",
  OffDuty = "off duty"
}

// Enum for driver status
export enum DriverStatus {
  Active = "active",
  Inactive = "inactive",
  OnLeave = "on leave"
}

// Type alias for days
export type DayType = string;

// Schedule interface
export interface ScheduleInterface {
  workingHours: string;
  daysOff: DayType[];
  vacationDays: DayType[];
  sickDays: DayType[];
  trainingDays: DayType[];
  onLeave: DayType[];
  onRoute: DayType[];
  offDuty: DayType[];
  emergencyDays: DayType[];
  otherDays: DayType[];
}

// Emergency contact interface
export interface EmergencyContact {
  name: string;
  phoneNumber: string;
}

// Contact interface
export interface ContactInterface {
  contactID: number;
  phoneNumber: string;
  email: string;
  secondaryPhoneNumber?: string; // Optional secondary phone number
}

// Driver interface
export interface DriversInterface {
  driversID: string;
  name: string;
  contactID: string;
  contact: ContactInterface;
  licenseDetails: LicenseInterface;
  availability: AvailabilityStatus;
  assignedVehicle?: VehicleInterface;
  currentLocation: LatLngLiteral;
  skillsCertifications?: string[];
  schedule: ScheduleInterface;
  history: RouteInterface[];
  status: DriverStatus;
  emergencyContact: EmergencyContact;
}

// Vehicle interface
export type VehicleType = 'car' | 'truck' | 'bike';
export type VehicleStatusType = 'available' | 'in use' | 'under maintenance';

export interface VehicleInterface {
  id: number;
  type: VehicleType;
  capacity: number;
  assignedDriver?: Driver;
  currentLocation: LatLngLiteral;
  status: VehicleStatusType;
  maintenanceHistory: MaintenanceRecordInterface[];
}

export interface ScheduleTimeInterface {
	departureTime: Date;
	arrivalTime: Date;
}

export interface ActualTimeInterface {
  departureTime: Date;
  arrivalTime: Date;
}

// Route interface
export type RouteStatusType = 'planned' | 'in progress' | 'completed' | 'canceled';
export interface RouteInterface {
  routeID: string;
  startingPoint: LatLngLiteral;
  destination: LatLngLiteral;
  assignedDrivers: DriversInterface[];
  scheduledTime: ScheduleTimeInterface;
  actualTime?: ActualTimeInterface;
  status: RouteStatusType;
  instructionsNotes: string;
}

// Dispatch interface
export type DispatchStatusType = 'pending' | 'dispatched' | 'completed';
export interface DispatchInterface {
  dispatchID: number;
  dispatcher: string; // User responsible for assigning routes and managing drivers
  assignedDrivers: DriversInterface[];
  scheduledTime: Date;
  actualTime?: Date;
  status: DispatchStatusType;
  instructionsNotes: string;
}

// Maintenance Record interface
export interface MaintenanceRecordInterface {
  MaintenanceRecordID: number;
  vehicleID: string;
  maintenanceDate: Date;
  description: string;
}
