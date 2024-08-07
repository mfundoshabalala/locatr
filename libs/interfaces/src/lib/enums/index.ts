// export type EntityInterface = Record<string, any> | null;

export interface EntityInterface extends Record<string, any> {
  id?: any;
  createdBy?: string;
  createdAt?: Date;
  updatedBy?: string;
  updatedAt?: Date;
}

export interface FormSubmission {
  mode: FormMode;
  entity: Record<string, any> | null;
  changed: boolean;
}

export enum FormMode {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
  CLOSE = 'close',
}

export enum Days {
  SUNDAY = 0,
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
  UNALLOCATED = 7,
}

export enum UserNotification {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

export enum NotificationType {
  USER = 'User',
  ORDER = 'Order',
}

export enum OrderNotification {
  SENT = 'Sent',
  DELIVERED = 'Delivered',
  READ = 'Read',
}

export enum OrderStatus {
  CANCELLED = 'Cancelled',
  DELIVERED = 'Delivered',
  IN_PROGRESS = 'In Progress',
  PENDING = 'Pending',
}

export enum OrderType {
  DELIVERY = 'Delivery',
  PICKUP = 'Pickup',
  TRANSFER = 'Transfer',
}

export enum OrderPriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

export enum UserRole {
  ADMIN = 'Admin',
  CUSTOMER = 'Customer',
  DISPATCHER = 'Dispatcher',
  DRIVER = 'Driver',
  OWNER = 'Owner',
}

export enum UserStatus {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
  SUSPENDED = 'Suspended',
  DELETED = 'Deleted',
}

export enum VehicleType {
  CAR = 'Car',
  TRUCK = 'Truck',
  BIKE = 'Bike',
  SCOOTER = 'Scooter',
  BUS = 'Bus',
  TRAIN = 'Train',
  SHIP = 'Ship',
  PLANE = 'Plane',
  HELICOPTER = 'Helicopter',
  OTHER = 'Other',
}
