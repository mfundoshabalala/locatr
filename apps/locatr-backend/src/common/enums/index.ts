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
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
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
  DISPATCHER = 'dispatcher',
  DRIVER = 'driver',
  CUSTOMER = 'customer',
}

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended',
  DELETED = 'deleted'
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
