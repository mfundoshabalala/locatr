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
  USER = 'user',
  ORDER = 'order',
}

export enum OrderNotification {
  SENT = 'sent',
  DELIVERED = 'delivered',
  READ = 'read',
}

export enum OrderStatus {
  CANCELLED = 'cancelled',
  DELIVERED = 'delivered',
  IN_PROGRESS = 'in progress',
  PENDING = 'pending',
}

export enum OrderType {
  DELIVERY = 'delivery',
  PICKUP = 'pickup',
  TRANSFER = 'transfer',
}

export enum OrderPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export enum UserRole {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
  DISPATCHER = 'dispatcher',
  DRIVER = 'driver',
  OWNER = 'owner',
}

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended',
  DELETED = 'deleted',
}

export enum VehicleType {
  CAR = 'car',
  TRUCK = 'truck',
  BIKE = 'bike',
  SCOOTER = 'scooter',
  BUS = 'bus',
  TRAIN = 'train',
  SHIP = 'ship',
  PLANE = 'plane',
  HELICOPTER = 'helicopter',
  OTHER = 'other',
}
