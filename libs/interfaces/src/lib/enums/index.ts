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
  IN_PROGRESS = 'in_progress',
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
  CAR = 'CAR',
  TRUCK = 'TRUCK',
  BIKE = 'BIKE',
  SCOOTER = 'SCOOTER',
  BUS = 'BUS',
  TRAIN = 'TRAIN',
  SHIP = 'SHIP',
  PLANE = 'PLANE',
  HELICOPTER = 'HELICOPTER',
  OTHER = 'OTHER',
}
